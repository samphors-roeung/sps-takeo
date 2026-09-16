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
    return false;
  }
  if (isSupabaseReady && supabaseClient) {
    return true;
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
      if (typeof window.initNewsRealtimeSync === 'function') {
        window.initNewsRealtimeSync();
      }
      if (typeof window.initVisitorRealtimeSync === 'function') {
        window.initVisitorRealtimeSync();
      }
      return true;
    }
  } catch (err) {
    console.error('Supabase initialization error:', err);
  }
  return false;
}

// Immediate & Periodic auto-init trigger
if (typeof supabase !== 'undefined' && supabase.createClient) {
  initSupabase();
} else {
  let retryInitCount = 0;
  const initTimer = setInterval(() => {
    retryInitCount++;
    if (typeof supabase !== 'undefined' && supabase.createClient) {
      clearInterval(initTimer);
      initSupabase();
    } else if (retryInitCount > 60) {
      clearInterval(initTimer);
    }
  }, 100);
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => { if (!isSupabaseReady) initSupabase(); });
}
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => { if (!isSupabaseReady) initSupabase(); });
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

async function fileToBase64Helper(file, maxWidth = 720, maxHeight = 720, quality = 0.58) {
  if (!file) return null;
  if (typeof window !== 'undefined' && typeof window.compressImageFile === 'function') {
    try {
      const res = await window.compressImageFile(file, maxWidth, maxHeight, quality);
      if (res) return res;
    } catch (e) {}
  }
  if (typeof file === 'string') return file;
  return new Promise((resolve) => {
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
    publishToActivities: item.publish_to_activities !== undefined ? !!item.publish_to_activities : (item.publishToActivities !== undefined ? !!item.publishToActivities : true),
    publish_to_activities: item.publish_to_activities !== undefined ? !!item.publish_to_activities : (item.publishToActivities !== undefined ? !!item.publishToActivities : true),
    isCustom: (item.is_custom !== undefined) ? !!item.is_custom : true,
    is_custom: (item.is_custom !== undefined) ? !!item.is_custom : true,
    syncedToCloud: true
  };
}

// -----------------------------------------------------------------------------
// 1. DEPARTMENT SERVICE (Real-time Cloud Sync for All Departments)
// -----------------------------------------------------------------------------
const DepartmentService = {
  async fetchAll() {
    if (!isSupabaseReady || !supabaseClient) initSupabase();
    
    // Strategy 1: Supabase JS Client
    if (isSupabaseReady && supabaseClient) {
      try {
        const { data, error } = await supabaseClient
          .from('department_posts')
          .select('*')
          .order('updated_at', { ascending: false });
        if (!error && Array.isArray(data)) {
          return data.map(normalizePostItem);
        }
      } catch (e) {
        console.warn('fetchAll department posts SDK notice (trying REST fallback):', e);
      }
    }

    // Strategy 2: Direct REST API Fallback
    try {
      const config = getSupabaseConfig();
      const res = await fetch(`${config.url}/rest/v1/department_posts?select=*&order=updated_at.desc`, {
        headers: {
          'apikey': config.anonKey,
          'Authorization': 'Bearer ' + config.anonKey
        }
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return data.map(normalizePostItem);
        }
      }
    } catch (restErr) {
      console.warn('fetchAll department posts REST fallback error:', restErr);
    }

    return [];
  },

  subscribe(callback) {
    if (!isSupabaseReady || !supabaseClient) initSupabase();

    // 1. Immediate Initial Fetch
    this.fetchAll().then(posts => {
      if (posts && Array.isArray(posts)) {
        callback(posts);
      }
    });

    // 2. Real-time PostgreSQL Changes Subscription
    try {
      if (supabaseClient) {
        const channelName = 'realtime_department_posts_' + Date.now();
        const channel = supabaseClient
          .channel(channelName)
          .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'department_posts' },
            async (payload) => {
              console.log('⚡ Real-time Department Post Event:', payload.eventType);
              const freshPosts = await DepartmentService.fetchAll();
              callback(freshPosts);
            }
          )
          .subscribe((status) => {
            if (status === 'SUBSCRIBED') {
              console.log('⚡ Connected to Realtime Department Channel');
            }
          });

        return () => {
          try { supabaseClient.removeChannel(channel); } catch(e) {}
        };
      }
    } catch (e) {
      console.warn('Realtime subscription notice:', e);
    }
    return () => {};
  },

  async create(item, coverFile, attachmentFile, galleryFiles = []) {
    if (!isSupabaseReady || !supabaseClient) initSupabase();

    // 1. Process & Compress Cover Image
    let coverUrl = item.image || '';
    if (coverFile) {
      coverUrl = await fileToBase64Helper(coverFile, 800, 800, 0.62);
    } else if (coverUrl && coverUrl.startsWith('data:') && coverUrl.length > 70000) {
      coverUrl = await fileToBase64Helper(coverUrl, 800, 800, 0.62);
    }

    // 2. Process Attachment Document
    let attachmentUrl = item.attachmentUrl || item.attachment_url || '';
    let attachmentName = item.attachmentName || item.attachment_name || '';
    if (attachmentFile) {
      attachmentName = attachmentFile.name;
      attachmentUrl = await fileToBase64Helper(attachmentFile);
    }

    // 3. Process & Compress Gallery Photos (~18-25KB each)
    let galleryUrls = [];
    const sourceGallery = (Array.isArray(galleryFiles) && galleryFiles.length > 0)
      ? galleryFiles
      : (Array.isArray(item.gallery) ? item.gallery : []);

    for (let i = 0; i < sourceGallery.length; i++) {
      const gFile = sourceGallery[i];
      if (!gFile) continue;
      if (typeof gFile === 'object' && gFile.name) {
        const u = await fileToBase64Helper(gFile, 720, 720, 0.58);
        if (u && !galleryUrls.includes(u)) galleryUrls.push(u);
      } else if (typeof gFile === 'string') {
        if (gFile.startsWith('data:') && gFile.length > 50000) {
          const u = await fileToBase64Helper(gFile, 720, 720, 0.58);
          if (u && !galleryUrls.includes(u)) galleryUrls.push(u);
        } else if (gFile && !galleryUrls.includes(gFile)) {
          galleryUrls.push(gFile);
        }
      }
    }
    galleryUrls = galleryUrls.filter(g => typeof g === 'string' && g.trim() !== '');

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

    // Strategy 1: Supabase JS Client Upsert
    if (isSupabaseReady && supabaseClient) {
      try {
        const { data, error } = await supabaseClient
          .from('department_posts')
          .upsert(payload, { onConflict: 'id' })
          .select();

        if (!error) {
          return normalizePostItem(payload);
        }
      } catch (sdkErr) {
        console.warn('Supabase SDK upsert notice (trying REST fallback):', sdkErr);
      }
    }

    // Strategy 2: Direct REST API Fallback
    const config = getSupabaseConfig();
    const res = await fetch(`${config.url}/rest/v1/department_posts`, {
      method: 'POST',
      headers: {
        'apikey': config.anonKey,
        'Authorization': 'Bearer ' + config.anonKey,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation,resolution=merge-duplicates'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`Supabase REST Error (${res.status}): ${errTxt}`);
    }

    return normalizePostItem(payload);
  },

  async update(postId, item, coverFile, attachmentFile, galleryFiles = []) {
    return this.create({ ...item, id: postId }, coverFile, attachmentFile, galleryFiles);
  },

  async delete(postId) {
    if (!isSupabaseReady || !supabaseClient) initSupabase();

    // Strategy 1: Supabase JS Client
    if (isSupabaseReady && supabaseClient) {
      try {
        const { error } = await supabaseClient
          .from('department_posts')
          .delete()
          .eq('id', String(postId));
        if (!error) return { status: 'success' };
      } catch (sdkErr) {
        console.warn('Supabase SDK delete notice (trying REST fallback):', sdkErr);
      }
    }

    // Strategy 2: Direct REST API Fallback
    const config = getSupabaseConfig();
    const res = await fetch(`${config.url}/rest/v1/department_posts?id=eq.${encodeURIComponent(postId)}`, {
      method: 'DELETE',
      headers: {
        'apikey': config.anonKey,
        'Authorization': 'Bearer ' + config.anonKey
      }
    });

    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`Supabase REST Delete Error (${res.status}): ${errTxt}`);
    }
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
  async fetchAll() {
    if (!isSupabaseReady || !supabaseClient) initSupabase();

    // Strategy 1: Supabase JS Client
    if (isSupabaseReady && supabaseClient) {
      try {
        const { data, error } = await supabaseClient
          .from('activities')
          .select('*')
          .order('created_at', { ascending: false });
        if (!error && Array.isArray(data)) {
          return data.map(a => ({
            ...a,
            categoryLabel: a.category_label || a.categoryLabel,
            badgeClass: a.badge_class || a.badgeClass,
            isCustom: a.is_custom !== undefined ? !!a.is_custom : true,
            syncedToCloud: true
          }));
        }
      } catch (e) {
        console.warn('fetchAll activities SDK notice (trying REST fallback):', e);
      }
    }

    // Strategy 2: Direct REST API Fallback
    try {
      const config = getSupabaseConfig();
      const res = await fetch(`${config.url}/rest/v1/activities?select=*&order=created_at.desc`, {
        headers: {
          'apikey': config.anonKey,
          'Authorization': 'Bearer ' + config.anonKey
        }
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return data.map(a => ({
            ...a,
            categoryLabel: a.category_label || a.categoryLabel,
            badgeClass: a.badge_class || a.badgeClass,
            isCustom: a.is_custom !== undefined ? !!a.is_custom : true,
            syncedToCloud: true
          }));
        }
      }
    } catch (restErr) {
      console.warn('fetchAll activities REST fallback error:', restErr);
    }

    return [];
  },

  subscribe(callback) {
    if (!isSupabaseReady || !supabaseClient) initSupabase();

    // 1. Initial Load
    this.fetchAll().then(acts => {
      if (acts && Array.isArray(acts) && acts.length > 0) {
        callback(acts);
      }
    });

    // 2. Realtime Channel
    try {
      if (supabaseClient) {
        const channelName = 'realtime_activities_' + Date.now();
        const channel = supabaseClient
          .channel(channelName)
          .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'activities' },
            async (payload) => {
              console.log('⚡ Real-time Activity Event:', payload.eventType);
              const fresh = await ActivityService.fetchAll();
              callback(fresh);
            }
          )
          .subscribe();

        return () => {
          try { supabaseClient.removeChannel(channel); } catch(e) {}
        };
      }
    } catch (e) {
      console.warn('Activity subscription notice:', e);
    }
    return () => {};
  },

  async create(article, coverFile, galleryFiles = []) {
    if (!isSupabaseReady || !supabaseClient) initSupabase();

    // 1. Process & Compress Cover Image
    let coverUrl = article.image || '';
    if (coverFile) {
      coverUrl = await fileToBase64Helper(coverFile, 800, 800, 0.62);
    } else if (coverUrl && coverUrl.startsWith('data:') && coverUrl.length > 70000) {
      coverUrl = await fileToBase64Helper(coverUrl, 800, 800, 0.62);
    }

    // 2. Process & Compress Gallery Photos
    let galleryUrls = [];
    const sourceGallery = (Array.isArray(galleryFiles) && galleryFiles.length > 0)
      ? galleryFiles
      : (Array.isArray(article.gallery) ? article.gallery : []);

    for (let i = 0; i < sourceGallery.length; i++) {
      const gFile = sourceGallery[i];
      if (!gFile) continue;
      if (typeof gFile === 'object' && gFile.name) {
        const u = await fileToBase64Helper(gFile, 720, 720, 0.58);
        if (u && !galleryUrls.includes(u)) galleryUrls.push(u);
      } else if (typeof gFile === 'string') {
        if (gFile.startsWith('data:') && gFile.length > 50000) {
          const u = await fileToBase64Helper(gFile, 720, 720, 0.58);
          if (u && !galleryUrls.includes(u)) galleryUrls.push(u);
        } else if (gFile && !galleryUrls.includes(gFile)) {
          galleryUrls.push(gFile);
        }
      }
    }
    galleryUrls = galleryUrls.filter(g => typeof g === 'string' && g.trim() !== '');

    const payload = {
      id: String(article.id || ('news_' + Date.now())),
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

    // Strategy 1: Supabase JS Client
    if (isSupabaseReady && supabaseClient) {
      try {
        const { error } = await supabaseClient.from('activities').upsert(payload, { onConflict: 'id' });
        if (!error) {
          return { ...payload, syncedToCloud: true };
        }
      } catch (sdkErr) {
        console.warn('Supabase SDK activities upsert notice (trying REST fallback):', sdkErr);
      }
    }

    // Strategy 2: Direct REST API Fallback
    const config = getSupabaseConfig();
    const res = await fetch(`${config.url}/rest/v1/activities`, {
      method: 'POST',
      headers: {
        'apikey': config.anonKey,
        'Authorization': 'Bearer ' + config.anonKey,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation,resolution=merge-duplicates'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`Supabase REST Error (${res.status}): ${errTxt}`);
    }

    return { ...payload, syncedToCloud: true };
  },

  async update(id, article, coverFile, galleryFiles = []) {
    return this.create({ ...article, id: String(id) }, coverFile, galleryFiles);
  },

  async delete(id) {
    if (!isSupabaseReady || !supabaseClient) initSupabase();

    // Strategy 1: Supabase JS Client
    if (isSupabaseReady && supabaseClient) {
      try {
        const { error } = await supabaseClient.from('activities').delete().eq('id', String(id));
        if (!error) return { status: 'success' };
      } catch (sdkErr) {
        console.warn('Supabase SDK activities delete notice (trying REST fallback):', sdkErr);
      }
    }

    // Strategy 2: Direct REST API Fallback
    const config = getSupabaseConfig();
    const res = await fetch(`${config.url}/rest/v1/activities?id=eq.${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: {
        'apikey': config.anonKey,
        'Authorization': 'Bearer ' + config.anonKey
      }
    });

    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`Supabase REST Delete Error (${res.status}): ${errTxt}`);
    }

    return { status: 'success' };
  }
};

// Global Connectivity Diagnostic Helper
window.checkSupabaseConnection = async function() {
  const config = getSupabaseConfig();
  const startTime = Date.now();
  try {
    const res = await fetch(`${config.url}/rest/v1/department_posts?select=id&limit=1`, {
      headers: {
        'apikey': config.anonKey,
        'Authorization': 'Bearer ' + config.anonKey
      }
    });
    const latency = Date.now() - startTime;
    return {
      connected: res.ok,
      status: res.status,
      latencyMs: latency,
      url: config.url
    };
  } catch (err) {
    return {
      connected: false,
      error: err.message,
      latencyMs: Date.now() - startTime,
      url: config.url
    };
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

// -----------------------------------------------------------------------------
// 6. REAL VISITOR ANALYTICS SERVICE (Cross-Device Cloud Sync & Live Presence)
// -----------------------------------------------------------------------------
let spsPresenceChannel = null;

const AnalyticsService = {
  subscribeStats(callback) {
    if (!isSupabaseReady || !supabaseClient) return () => {};

    // 1. Initial Fetch of Global Aggregated Analytics
    supabaseClient
      .from('site_analytics')
      .select('*')
      .eq('id', 'global_stats')
      .maybeSingle()
      .then(({ data, error }) => {
        if (!error && data) {
          callback({
            totalViews: parseInt(data.total_views, 10) || 0,
            uniqueVisitors: parseInt(data.unique_visitors, 10) || 0,
            provinceCounts: (typeof data.province_counts === 'object' && data.province_counts) ? data.province_counts : {}
          });
        }
      });

    // 2. Real-time PostgreSQL Changes on site_analytics
    try {
      const channel = supabaseClient
        .channel('realtime_site_analytics')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'site_analytics' },
          (payload) => {
            if (payload && payload.new && (payload.new.id === 'global_stats' || !payload.new.id)) {
              callback({
                totalViews: parseInt(payload.new.total_views, 10) || 0,
                uniqueVisitors: parseInt(payload.new.unique_visitors, 10) || 0,
                provinceCounts: (typeof payload.new.province_counts === 'object' && payload.new.province_counts) ? payload.new.province_counts : {}
              });
            }
          }
        )
        .subscribe();

      return () => {
        supabaseClient.removeChannel(channel);
      };
    } catch (e) {
      console.warn('Analytics realtime subscribe error:', e);
      return () => {};
    }
  },

  async recordVisit(visitorId, isNewVisitor, provinceId, logPayload) {
    if (!isSupabaseReady || !supabaseClient) return null;

    try {
      // 1. Log detailed visitor event asynchronously
      if (logPayload) {
        supabaseClient.from('visitor_logs').insert([logPayload]).then(() => {}).catch(() => {});
      }

      // 2. Fetch current global stats row
      const { data: existing } = await supabaseClient
        .from('site_analytics')
        .select('*')
        .eq('id', 'global_stats')
        .maybeSingle();

      let currentTotalViews = existing ? (parseInt(existing.total_views, 10) || 0) : 0;
      let currentUnique = existing ? (parseInt(existing.unique_visitors, 10) || 0) : 0;
      let provCounts = (existing && typeof existing.province_counts === 'object' && existing.province_counts) ? { ...existing.province_counts } : {};

      currentTotalViews += 1;
      if (isNewVisitor) {
        currentUnique += 1;
      }
      if (provinceId) {
        provCounts[provinceId] = (provCounts[provinceId] || 0) + 1;
      }

      const updatedPayload = {
        id: 'global_stats',
        total_views: currentTotalViews,
        unique_visitors: Math.max(1, currentUnique),
        province_counts: provCounts,
        updated_at: new Date().toISOString()
      };

      const { data, error } = await supabaseClient
        .from('site_analytics')
        .upsert(updatedPayload, { onConflict: 'id' })
        .select();

      if (error) {
        console.warn('site_analytics upsert warning:', error.message);
      }
      return updatedPayload;
    } catch (err) {
      console.warn('recordVisit exception:', err);
      return null;
    }
  },

  trackPresence(visitorId, onPresenceUpdate) {
    if (!isSupabaseReady || !supabaseClient || !visitorId) return () => {};

    try {
      if (spsPresenceChannel) {
        supabaseClient.removeChannel(spsPresenceChannel);
      }

      spsPresenceChannel = supabaseClient.channel('sps_global_presence', {
        config: {
          presence: { key: String(visitorId) }
        }
      });

      spsPresenceChannel
        .on('presence', { event: 'sync' }, () => {
          const state = spsPresenceChannel.presenceState();
          const activeKeys = Object.keys(state);
          const liveCount = Math.max(1, activeKeys.length);
          if (onPresenceUpdate) onPresenceUpdate(liveCount);
        })
        .subscribe(async (status) => {
          if (status === 'SUBSCRIBED') {
            await spsPresenceChannel.track({
              online_at: new Date().toISOString(),
              device: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
            });
          }
        });

      return () => {
        if (spsPresenceChannel) supabaseClient.removeChannel(spsPresenceChannel);
      };
    } catch (e) {
      console.warn('Presence tracking notice:', e);
      return () => {};
    }
  },

  async logVisit(logPayload) {
    if (!isSupabaseReady || !supabaseClient) return null;
    try {
      const { data, error } = await supabaseClient
        .from('visitor_logs')
        .insert([logPayload]);
      return data;
    } catch (e) {
      return null;
    }
  },

  async fetchAllLogs() {
    if (!isSupabaseReady || !supabaseClient) return null;
    try {
      const { data, error } = await supabaseClient
        .from('visitor_logs')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) return null;
      return data;
    } catch (e) {
      return null;
    }
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
window.AnalyticsService = AnalyticsService;
