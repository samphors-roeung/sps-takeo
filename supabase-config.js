// =============================================================================
// SOVANNAPHUMI SCHOOL 25, TAKEO CAMPUS - SUPABASE REAL-TIME CLOUD SERVICE
// Powers Real-time Cloud PostgreSQL Database & High-Speed Storage CDN
// =============================================================================

const DEFAULT_SUPABASE_CONFIG = {
  url: "https://hrhvoqgbnsslmldlteyz.supabase.co",
  anonKey: "sb_publishable_OEx6pGJgWlVQzq9ICq1Zyg_TAugnhKQ",
  bucket: "sps-storage"
};

function getSupabaseConfig() {
  try {
    const custom = localStorage.getItem('sps_supabase_config');
    if (custom) return JSON.parse(custom);
  } catch (e) {}
  return DEFAULT_SUPABASE_CONFIG;
}

let supabaseClient = null;
let isSupabaseReady = false;

function initSupabase() {
  if (typeof supabase === 'undefined' || !supabase.createClient) {
    console.warn('⚠️ Supabase JS SDK not loaded yet. Retrying on DOM ready...');
    return false;
  }
  try {
    const config = getSupabaseConfig();
    if (config.url && config.anonKey) {
      supabaseClient = supabase.createClient(config.url, config.anonKey, {
        realtime: {
          params: {
            eventsPerSecond: 10
          }
        }
      });
      isSupabaseReady = true;
      console.log('⚡ Supabase connected successfully to:', config.url);

      if (typeof window.initDepartmentRealtimeSync === 'function') {
        window.initDepartmentRealtimeSync();
      }
      return true;
    }
  } catch (err) {
    console.error('Supabase initialization error:', err);
  }
  return false;
}

// -----------------------------------------------------------------------------
// HELPER: Upload File to Supabase Storage Bucket (with Base64 Fallback)
// -----------------------------------------------------------------------------
async function uploadFileToSupabaseStorage(folderPath, file, onProgress) {
  if (!file) return null;
  if (!isSupabaseReady || !supabaseClient) {
    return fileToBase64Helper(file);
  }

  try {
    const config = getSupabaseConfig();
    const bucketName = config.bucket || 'sps-storage';
    const cleanFileName = Date.now() + '_' + (file.name || 'file').replace(/[^a-zA-Z0-9._-]/g, '_');
    const fullPath = `${folderPath}/${cleanFileName}`;

    if (onProgress) onProgress(30);

    const { data, error } = await supabaseClient.storage
      .from(bucketName)
      .upload(fullPath, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.warn('Storage upload notice (using safe fallback):', error.message);
      return fileToBase64Helper(file);
    }

    if (onProgress) onProgress(100);
    const { data: publicData } = supabaseClient.storage.from(bucketName).getPublicUrl(fullPath);
    return publicData ? publicData.publicUrl : fileToBase64Helper(file);
  } catch (err) {
    console.warn('Storage put exception (using fallback):', err);
    return fileToBase64Helper(file);
  }
}

function fileToBase64Helper(file) {
  return new Promise((resolve) => {
    if (!file) { resolve(null); return; }
    if (typeof file === 'string') { resolve(file); return; }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

// Helper: Normalize item properties (supports both camelCase and snake_case)
function normalizePostItem(item) {
  if (!item) return item;
  return {
    ...item,
    id: String(item.id),
    department: item.department || 'kge_sec',
    module: item.module || 'meeting',
    title: item.title || '',
    description: item.description || '',
    date: item.date || new Date().toISOString().split('T')[0],
    author: item.author || 'Takeo Campus',
    image: item.image || '',
    attachmentUrl: item.attachment_url || item.attachmentUrl || '',
    attachmentName: item.attachment_name || item.attachmentName || '',
    attachment_url: item.attachment_url || item.attachmentUrl || '',
    attachment_name: item.attachment_name || item.attachmentName || '',
    gallery: Array.isArray(item.gallery) ? item.gallery : [],
    isCustom: (item.is_custom !== undefined) ? !!item.is_custom : true,
    is_custom: (item.is_custom !== undefined) ? !!item.is_custom : true,
    syncedToCloud: true
  };
}

// -----------------------------------------------------------------------------
// 1. DEPARTMENT SERVICE (Real-time Cloud Sync for All Departments)
// -----------------------------------------------------------------------------
const DepartmentService = {
  subscribe(callback) {
    if (!isSupabaseReady || !supabaseClient) return () => {};

    // 1. Immediate Initial Fetch
    supabaseClient
      .from('department_posts')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && Array.isArray(data)) {
          callback(data.map(normalizePostItem));
        }
      });

    // 2. Real-time PostgreSQL Changes Subscription
    try {
      const channel = supabaseClient
        .channel('realtime_department_posts')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'department_posts' },
          async () => {
            const { data, error } = await supabaseClient
              .from('department_posts')
              .select('*')
              .order('created_at', { ascending: false });
            if (!error && Array.isArray(data)) {
              callback(data.map(normalizePostItem));
            }
          }
        )
        .subscribe();

      return () => {
        supabaseClient.removeChannel(channel);
      };
    } catch (e) {
      console.warn('Realtime subscription notice:', e);
      return () => {};
    }
  },

  async create(item, coverFile, attachmentFile, galleryFiles = []) {
    if (!isSupabaseReady || !supabaseClient) throw new Error('Supabase is not connected');

    let coverUrl = item.image || '';
    if (coverFile) {
      const uploaded = await uploadFileToSupabaseStorage('department', coverFile);
      if (uploaded) coverUrl = uploaded;
    }

    let attachmentUrl = item.attachmentUrl || item.attachment_url || '';
    let attachmentName = item.attachmentName || item.attachment_name || '';
    if (attachmentFile) {
      attachmentName = attachmentFile.name;
      const uploadedDoc = await uploadFileToSupabaseStorage('department/docs', attachmentFile);
      if (uploadedDoc) attachmentUrl = uploadedDoc;
    }

    let galleryUrls = Array.isArray(item.gallery) ? [...item.gallery] : [];
    if (galleryFiles && galleryFiles.length > 0) {
      for (let i = 0; i < galleryFiles.length; i++) {
        const gFile = galleryFiles[i];
        if (typeof gFile === 'object' && gFile && gFile.name) {
          const u = await uploadFileToSupabaseStorage('department/gallery', gFile);
          if (u) galleryUrls.push(u);
        } else if (typeof gFile === 'string') {
          galleryUrls.push(gFile);
        }
      }
    }

    const postId = String(item.id || ('dept_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7)));

    const payload = {
      id: postId,
      department: (item.department || 'kge_sec').trim(),
      module: (item.module || 'meeting').trim(),
      title: item.title || '',
      description: item.description || '',
      date: item.date || new Date().toISOString().split('T')[0],
      author: item.author || 'Takeo Campus',
      image: coverUrl,
      attachment_url: attachmentUrl,
      attachment_name: attachmentName,
      gallery: galleryUrls,
      is_custom: true,
      updated_at: new Date().toISOString()
    };

    const { data, error } = await supabaseClient
      .from('department_posts')
      .upsert(payload, { onConflict: 'id' })
      .select();

    if (error) {
      console.error('Supabase create department post error:', error);
      throw error;
    }

    return normalizePostItem(payload);
  },

  async update(postId, item, coverFile, attachmentFile, galleryFiles = []) {
    return this.create({ ...item, id: postId }, coverFile, attachmentFile, galleryFiles);
  },

  async delete(postId) {
    if (!isSupabaseReady || !supabaseClient) throw new Error('Supabase not connected');
    const { error } = await supabaseClient
      .from('department_posts')
      .delete()
      .eq('id', String(postId));

    if (error) throw error;
    return { status: 'success' };
  }
};

// -----------------------------------------------------------------------------
// 2. STAFF SERVICE (131+ Staff Profiles & Checklists)
// -----------------------------------------------------------------------------
const StaffService = {
  subscribe(callback) {
    if (!isSupabaseReady || !supabaseClient) return () => {};

    supabaseClient
      .from('staff')
      .select('*')
      .then(({ data, error }) => {
        if (!error && Array.isArray(data)) {
          callback(data.map(d => ({ docId: d.id, ...d })));
        }
      });

    try {
      const channel = supabaseClient
        .channel('realtime_staff')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'staff' }, async () => {
          const { data } = await supabaseClient.from('staff').select('*');
          if (Array.isArray(data)) callback(data.map(d => ({ docId: d.id, ...d })));
        })
        .subscribe();
      return () => supabaseClient.removeChannel(channel);
    } catch (e) {
      return () => {};
    }
  },

  async getById(staffId) {
    if (!isSupabaseReady || !supabaseClient) return null;
    const cleanId = String(staffId).trim();
    const { data, error } = await supabaseClient
      .from('staff')
      .select('*')
      .eq('id', cleanId)
      .maybeSingle();

    if (data) return { docId: data.id, ...data };

    // Try alternatives (e.g. padding zeroes)
    const numOnly = cleanId.replace(/^0+/, '');
    for (const alt of [numOnly, numOnly.padStart(5, '0'), numOnly.padStart(4, '0')]) {
      const { data: altData } = await supabaseClient.from('staff').select('*').eq('id', alt).maybeSingle();
      if (altData) return { docId: altData.id, ...altData };
    }
    return null;
  },

  async saveSubmission(submission) {
    if (!isSupabaseReady || !supabaseClient) throw new Error('Supabase is not ready');
    const staffId = String(submission.id).trim();

    let existing = await this.getById(staffId);
    const existingData = existing || {};

    const mergedPart1 = { ...(existingData.part1 || {}), ...(submission.part1 || {}) };
    const mergedPart2 = { ...(existingData.part2 || {}), ...(submission.part2 || {}) };
    const mergedPart3 = { ...(existingData.part3 || {}), ...(submission.part3 || {}) };

    const payload = {
      id: staffId,
      name: submission.name || existingData.name || '',
      department: submission.department || existingData.department || '',
      role: submission.role || existingData.role || '',
      phone: submission.phone || existingData.phone || '',
      photo: submission.photoUrl || existingData.photo || '',
      part1: mergedPart1,
      part2: mergedPart2,
      part3: mergedPart3,
      last_date: new Date().toLocaleDateString(),
      updated_at: new Date().toISOString()
    };

    const { error } = await supabaseClient
      .from('staff')
      .upsert(payload, { onConflict: 'id' });

    if (error) throw error;
    return { status: 'success', id: staffId };
  }
};

// -----------------------------------------------------------------------------
// 3. DOCUMENT SERVICE (Official Documents In & Out)
// -----------------------------------------------------------------------------
const DocumentService = {
  subscribe(callback) {
    if (!isSupabaseReady || !supabaseClient) return () => {};

    supabaseClient
      .from('documents')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && Array.isArray(data)) {
          callback(data.map(d => ({
            ...d,
            fileUrl: d.file_url || d.fileUrl || '',
            fileName: d.file_name || d.fileName || ''
          })));
        }
      });

    try {
      const channel = supabaseClient
        .channel('realtime_documents')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'documents' }, async () => {
          const { data } = await supabaseClient.from('documents').select('*').order('created_at', { ascending: false });
          if (Array.isArray(data)) callback(data.map(d => ({
            ...d,
            fileUrl: d.file_url || d.fileUrl || '',
            fileName: d.file_name || d.fileName || ''
          })));
        })
        .subscribe();
      return () => supabaseClient.removeChannel(channel);
    } catch (e) {
      return () => {};
    }
  },

  async create(docData, fileBlob) {
    if (!isSupabaseReady || !supabaseClient) throw new Error('Supabase not ready');

    let fileUrl = docData.fileUrl || docData.file_url || '';
    if (fileBlob) {
      const uploaded = await uploadFileToSupabaseStorage('documents', fileBlob);
      if (uploaded) fileUrl = uploaded;
    }

    const payload = {
      id: docData.id || ('doc_' + Date.now()),
      code: docData.code || '',
      title: docData.title || '',
      type: docData.type || 'in',
      date: docData.date || new Date().toISOString().split('T')[0],
      department: docData.department || '',
      receiver: docData.receiver || '',
      file_url: fileUrl,
      file_name: fileBlob ? fileBlob.name : (docData.fileName || docData.file_name || ''),
      status: docData.status || 'Completed'
    };

    const { error } = await supabaseClient.from('documents').upsert(payload, { onConflict: 'id' });
    if (error) throw error;
    return { ...payload, fileUrl, fileName: payload.file_name };
  },

  async delete(docId) {
    if (!isSupabaseReady || !supabaseClient) throw new Error('Supabase not ready');
    const { error } = await supabaseClient.from('documents').delete().eq('id', String(docId));
    if (error) throw error;
    return { status: 'success' };
  }
};

// -----------------------------------------------------------------------------
// 4. ACTIVITY SERVICE (School News & Activities)
// -----------------------------------------------------------------------------
const ActivityService = {
  subscribe(callback) {
    if (!isSupabaseReady || !supabaseClient) return () => {};

    supabaseClient
      .from('activities')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && Array.isArray(data)) {
          callback(data.map(a => ({
            ...a,
            categoryLabel: a.category_label || a.categoryLabel,
            badgeClass: a.badge_class || a.badgeClass,
            isCustom: a.is_custom !== undefined ? !!a.is_custom : true
          })));
        }
      });

    try {
      const channel = supabaseClient
        .channel('realtime_activities')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'activities' }, async () => {
          const { data } = await supabaseClient.from('activities').select('*').order('created_at', { ascending: false });
          if (Array.isArray(data)) callback(data.map(a => ({
            ...a,
            categoryLabel: a.category_label || a.categoryLabel,
            badgeClass: a.badge_class || a.badgeClass,
            isCustom: a.is_custom !== undefined ? !!a.is_custom : true
          })));
        })
        .subscribe();
      return () => supabaseClient.removeChannel(channel);
    } catch (e) {
      return () => {};
    }
  },

  async create(article, coverFile, galleryFiles = []) {
    if (!isSupabaseReady || !supabaseClient) throw new Error('Supabase not ready');

    let coverUrl = article.image || '';
    if (coverFile) {
      const uploaded = await uploadFileToSupabaseStorage('activities', coverFile);
      if (uploaded) coverUrl = uploaded;
    }

    let galleryUrls = Array.isArray(article.gallery) ? [...article.gallery] : [];
    if (galleryFiles && galleryFiles.length > 0) {
      for (let i = 0; i < galleryFiles.length; i++) {
        const u = await uploadFileToSupabaseStorage('activities/gallery', galleryFiles[i]);
        if (u) galleryUrls.push(u);
      }
    }

    const payload = {
      id: article.id || ('news_' + Date.now()),
      title: article.title || '',
      category: article.category || 'general',
      category_label: article.categoryLabel || article.category_label || 'ព័ត៌មានទូទៅ',
      badge_class: article.badgeClass || article.badge_class || 'badge-student',
      date: article.date || new Date().toISOString().split('T')[0],
      image: coverUrl,
      summary: article.summary || '',
      content: article.content || '',
      gallery: galleryUrls,
      attachment: article.attachment || null,
      is_custom: true
    };

    const { error } = await supabaseClient.from('activities').upsert(payload, { onConflict: 'id' });
    if (error) throw error;
    return payload;
  },

  async update(id, article) {
    if (!isSupabaseReady || !supabaseClient) throw new Error('Supabase not ready');
    const { error } = await supabaseClient.from('activities').update(article).eq('id', String(id));
    if (error) throw error;
    return { status: 'success' };
  },

  async delete(id) {
    if (!isSupabaseReady || !supabaseClient) throw new Error('Supabase not ready');
    const { error } = await supabaseClient.from('activities').delete().eq('id', String(id));
    if (error) throw error;
    return { status: 'success' };
  }
};

// -----------------------------------------------------------------------------
// 5. QAC SERVICE (Quality Checklist)
// -----------------------------------------------------------------------------
const QACService = {
  subscribe(callback) {
    if (!isSupabaseReady || !supabaseClient) return () => {};

    supabaseClient
      .from('qac')
      .select('*')
      .order('index', { ascending: true })
      .then(({ data, error }) => {
        if (!error && Array.isArray(data)) {
          callback(data.map(q => ({
            ...q,
            isCompleted: q.is_completed !== undefined ? !!q.is_completed : false,
            evidenceUrl: q.evidence_url || ''
          })));
        }
      });
  },

  async toggleStatus(qacId, isCompleted, evidenceUrl = '') {
    if (!isSupabaseReady || !supabaseClient) throw new Error('Supabase not ready');
    const updatePayload = {
      is_completed: isCompleted,
      updated_at: new Date().toISOString()
    };
    if (evidenceUrl) updatePayload.evidence_url = evidenceUrl;

    const { error } = await supabaseClient.from('qac').update(updatePayload).eq('id', String(qacId));
    if (error) throw error;
    return { status: 'success' };
  }
};

// Export to Global Window
window.initSupabase = initSupabase;
window.isSupabaseReady = () => isSupabaseReady;
window.getSupabaseConfig = getSupabaseConfig;
window.uploadFileToSupabaseStorage = uploadFileToSupabaseStorage;

// Backward Compatibility Aliases for seamless drop-in
window.initFirebase = initSupabase;
window.isFirebaseReady = () => isSupabaseReady;
window.uploadFileToFirebaseStorage = uploadFileToSupabaseStorage;

window.DepartmentService = DepartmentService;
window.StaffService = StaffService;
window.DocumentService = DocumentService;
window.ActivityService = ActivityService;
window.QACService = QACService;
