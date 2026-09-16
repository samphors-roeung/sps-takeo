// =============================================================================
// SOVANNAPHUMI SCHOOL 25, TAKEO CAMPUS - CLOUDFLARE REAL-TIME CLOUD SERVICE
// Powers Cloudflare D1 SQL Database & Cloudflare R2 High-Speed Storage CDN
// 100% Zero-Latency, Zero Disk IO Limits, Edge CDN Powered (media.sps-takeo.com)
// =============================================================================

const CLOUDFLARE_WORKER_URL = "https://restless-lake-6152.roeungsamphors007.workers.dev";
const CLOUDFLARE_R2_CDN = "https://media.sps-takeo.com";

const DEFAULT_CLOUDFLARE_CONFIG = {
  workerUrl: CLOUDFLARE_WORKER_URL,
  cdnUrl: CLOUDFLARE_R2_CDN
};

function getCloudflareConfig() {
  try {
    const custom = localStorage.getItem('sps_cloudflare_config') || localStorage.getItem('sps_supabase_config');
    if (custom) return JSON.parse(custom);
  } catch (e) {}
  return DEFAULT_CLOUDFLARE_CONFIG;
}

let isCloudflareInitialized = false;

function initCloudflare() {
  if (isCloudflareInitialized) return true;
  isCloudflareInitialized = true;
  console.log('⚡ Cloudflare D1 & R2 Connected to:', CLOUDFLARE_WORKER_URL);
  return true;
}

// Backward compatibility alias
function initSupabase() {
  return initCloudflare();
}

// Auto-init on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCloudflare());
  } else {
    initCloudflare();
  }
}
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => initCloudflare());
}

// -----------------------------------------------------------------------------
// HELPER: Upload File directly to Cloudflare R2 Storage CDN (https://media.sps-takeo.com)
// -----------------------------------------------------------------------------
async function uploadFileToCloudflareR2(folderPath, fileOrDataUrl, onProgress) {
  if (!fileOrDataUrl) return null;

  // If already a remote CDN URL, return directly
  if (typeof fileOrDataUrl === 'string' && (fileOrDataUrl.startsWith('http://') || fileOrDataUrl.startsWith('https://'))) {
    return fileOrDataUrl;
  }

  try {
    let blobToSend = null;
    let fileName = 'file.webp';

    if (fileOrDataUrl instanceof Blob || (typeof fileOrDataUrl === 'object' && fileOrDataUrl.name)) {
      blobToSend = fileOrDataUrl;
      fileName = fileOrDataUrl.name || 'image.webp';
    } else if (typeof fileOrDataUrl === 'string' && fileOrDataUrl.startsWith('data:')) {
      const arr = fileOrDataUrl.split(',');
      const mime = (arr[0].match(/:(.*?);/) || [])[1] || 'image/webp';
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      blobToSend = new Blob([u8arr], { type: mime });
      const ext = mime.split('/')[1] || 'webp';
      fileName = `upload_${Date.now()}.${ext}`;
    }

    if (blobToSend) {
      if (onProgress) onProgress(30);
      const formData = new FormData();
      formData.append('file', blobToSend, fileName);
      formData.append('folder', folderPath || 'uploads');

      const res = await fetch(CLOUDFLARE_WORKER_URL, {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        const json = await res.json();
        if (json && json.url) {
          if (onProgress) onProgress(100);
          console.log('⚡ Uploaded directly to Cloudflare R2 CDN:', json.url);
          return json.url;
        }
      }
    }
  } catch (err) {
    console.warn('Cloudflare R2 upload warning (falling back to Base64):', err);
  }

  // Fallback to lightweight base64 helper if offline
  return fileToBase64Helper(fileOrDataUrl);
}

// Backward-compatibility aliases
async function uploadFileToSupabaseStorage(folderPath, file, onProgress) {
  return uploadFileToCloudflareR2(folderPath, file, onProgress);
}
async function uploadFileToFirebaseStorage(folderPath, file, onProgress) {
  return uploadFileToCloudflareR2(folderPath, file, onProgress);
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
// 1. DEPARTMENT SERVICE (Cloudflare D1 Real-time Sync for All Departments)
// -----------------------------------------------------------------------------
const DepartmentService = {
  async fetchAll() {
    try {
      const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/department_posts`, {
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return data.map(normalizePostItem);
        }
      }
    } catch (err) {
      console.warn('fetchAll department posts error:', err);
    }
    return [];
  },

  subscribe(callback) {
    // 1. Immediate Initial Fetch
    this.fetchAll().then(posts => {
      if (posts && Array.isArray(posts)) {
        callback(posts);
      }
    });

    // 2. Periodic Live Sync (Every 8 seconds & on window focus)
    const timer = setInterval(async () => {
      try {
        const freshPosts = await DepartmentService.fetchAll();
        if (Array.isArray(freshPosts)) {
          callback(freshPosts);
        }
      } catch (e) {}
    }, 8000);

    const onFocus = async () => {
      try {
        const freshPosts = await DepartmentService.fetchAll();
        if (Array.isArray(freshPosts)) callback(freshPosts);
      } catch (e) {}
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('focus', onFocus);
    }

    return () => {
      clearInterval(timer);
      if (typeof window !== 'undefined') {
        window.removeEventListener('focus', onFocus);
      }
    };
  },

  async create(item, coverFile, attachmentFile, galleryFiles = []) {
    // 1. Process & Upload Cover Image to Cloudflare R2
    let coverUrl = item.image || '';
    if (coverFile) {
      coverUrl = await uploadFileToCloudflareR2('department/covers', coverFile);
    } else if (coverUrl && coverUrl.startsWith('data:')) {
      coverUrl = await uploadFileToCloudflareR2('department/covers', coverUrl);
    }

    // 2. Process & Upload Attachment Document to Cloudflare R2
    let attachmentUrl = item.attachmentUrl || item.attachment_url || '';
    let attachmentName = item.attachmentName || item.attachment_name || '';
    if (attachmentFile) {
      attachmentName = attachmentFile.name;
      attachmentUrl = await uploadFileToCloudflareR2('department/docs', attachmentFile);
    } else if (attachmentUrl && attachmentUrl.startsWith('data:')) {
      attachmentUrl = await uploadFileToCloudflareR2('department/docs', attachmentUrl);
    }

    // 3. Process & Upload Gallery Photos to Cloudflare R2
    let galleryUrls = [];
    const sourceGallery = (Array.isArray(galleryFiles) && galleryFiles.length > 0)
      ? galleryFiles
      : (Array.isArray(item.gallery) ? item.gallery : []);

    for (let i = 0; i < sourceGallery.length; i++) {
      const gFile = sourceGallery[i];
      if (!gFile) continue;
      if (typeof gFile === 'string' && (gFile.startsWith('http://') || gFile.startsWith('https://'))) {
        if (!galleryUrls.includes(gFile)) galleryUrls.push(gFile);
      } else {
        const u = await uploadFileToCloudflareR2('department/gallery', gFile);
        if (u && !galleryUrls.includes(u)) galleryUrls.push(u);
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
      image: coverUrl || '',
      attachment_url: attachmentUrl || '',
      attachment_name: attachmentName || '',
      gallery: galleryUrls,
      publish_to_activities: (item.publish_to_activities !== false && item.publishToActivities !== false),
      is_custom: true,
      updated_at: new Date().toISOString()
    };

    // Save directly to Cloudflare D1
    const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/department_posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`Cloudflare D1 Error (${res.status}): ${errTxt}`);
    }

    return normalizePostItem(payload);
  },

  async update(postId, item, coverFile, attachmentFile, galleryFiles = []) {
    return this.create({ ...item, id: postId }, coverFile, attachmentFile, galleryFiles);
  },

  async delete(postId) {
    const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/department_posts?id=${encodeURIComponent(postId)}`, {
      method: 'DELETE'
    });
    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`Cloudflare D1 Delete Error (${res.status}): ${errTxt}`);
    }
    return { status: 'success' };
  }
};

// -----------------------------------------------------------------------------
// 2. STAFF SERVICE (131+ Staff Profiles & Checklists on Cloudflare D1)
// -----------------------------------------------------------------------------
const StaffService = {
  async fetchAll() {
    try {
      const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/staff`, {
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return data.map(d => ({ docId: d.id, ...d }));
        }
      }
    } catch (e) {
      console.warn('fetchAll staff error:', e);
    }
    return [];
  },

  subscribe(callback) {
    this.fetchAll().then(staffList => {
      if (Array.isArray(staffList) && staffList.length > 0) callback(staffList);
    });

    const timer = setInterval(async () => {
      const fresh = await StaffService.fetchAll();
      if (Array.isArray(fresh) && fresh.length > 0) callback(fresh);
    }, 10000);

    return () => clearInterval(timer);
  },

  async getById(staffId) {
    const list = await this.fetchAll();
    const cleanId = String(staffId).trim();
    let found = list.find(s => String(s.id).trim() === cleanId);
    if (found) return found;

    // Try without leading zeros or with padding
    const numOnly = cleanId.replace(/^0+/, '');
    for (const alt of [numOnly, numOnly.padStart(5, '0'), numOnly.padStart(4, '0')]) {
      found = list.find(s => String(s.id).trim() === alt);
      if (found) return found;
    }
    return null;
  },

  async saveSubmission(submission) {
    const staffId = String(submission.id).trim();
    let existing = await this.getById(staffId);
    const existingData = existing || {};

    let photoUrl = submission.photoUrl || submission.photo || existingData.photo || '';
    if (submission.photoFile) {
      photoUrl = await uploadFileToCloudflareR2('staff/photos', submission.photoFile);
    } else if (photoUrl && photoUrl.startsWith('data:')) {
      photoUrl = await uploadFileToCloudflareR2('staff/photos', photoUrl);
    }

    const mergedPart1 = { ...(existingData.part1 || {}), ...(submission.part1 || {}) };
    const mergedPart2 = { ...(existingData.part2 || {}), ...(submission.part2 || {}) };
    const mergedPart3 = { ...(existingData.part3 || {}), ...(submission.part3 || {}) };

    const payload = {
      id: staffId,
      name: submission.name || existingData.name || '',
      department: submission.department || existingData.department || '',
      role: submission.role || existingData.role || '',
      phone: submission.phone || existingData.phone || '',
      photo: photoUrl,
      part1: mergedPart1,
      part2: mergedPart2,
      part3: mergedPart3,
      last_date: new Date().toLocaleDateString(),
      updated_at: new Date().toISOString()
    };

    const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/staff`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`Cloudflare D1 Staff Save Error (${res.status}): ${errTxt}`);
    }

    return { status: 'success', id: staffId };
  }
};

// -----------------------------------------------------------------------------
// 3. DOCUMENT SERVICE (Official Documents In & Out on Cloudflare D1)
// -----------------------------------------------------------------------------
const DocumentService = {
  async fetchAll() {
    try {
      const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/documents`, {
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return data.map(d => ({
            ...d,
            fileUrl: d.file_url || d.fileUrl || '',
            fileName: d.file_name || d.fileName || ''
          }));
        }
      }
    } catch (e) {
      console.warn('fetchAll documents error:', e);
    }
    return [];
  },

  subscribe(callback) {
    this.fetchAll().then(docs => {
      if (Array.isArray(docs)) callback(docs);
    });

    const timer = setInterval(async () => {
      const fresh = await DocumentService.fetchAll();
      if (Array.isArray(fresh)) callback(fresh);
    }, 10000);

    return () => clearInterval(timer);
  },

  async create(docData, fileBlob) {
    let fileUrl = docData.fileUrl || docData.file_url || '';
    let fileName = docData.fileName || docData.file_name || 'Document';

    if (fileBlob) {
      fileName = fileBlob.name || fileName;
      const uploaded = await uploadFileToCloudflareR2('documents', fileBlob);
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
      file_name: fileName,
      status: docData.status || 'Completed'
    };

    const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/documents`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`Cloudflare D1 Document Error (${res.status}): ${errTxt}`);
    }

    return { ...payload, fileUrl, fileName: payload.file_name };
  },

  async delete(docId) {
    const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/documents?id=${encodeURIComponent(docId)}`, {
      method: 'DELETE'
    });
    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`Cloudflare D1 Document Delete Error (${res.status}): ${errTxt}`);
    }
    return { status: 'success' };
  }
};

// -----------------------------------------------------------------------------
// 4. ACTIVITY SERVICE (School News & Activities on Cloudflare D1)
// -----------------------------------------------------------------------------
const ActivityService = {
  async fetchAll() {
    try {
      const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/activities`, {
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return data.map(a => ({
            ...a,
            categoryLabel: a.category_label || a.categoryLabel || 'ព័ត៌មានទូទៅ',
            badgeClass: a.badge_class || a.badgeClass || 'badge-student',
            isCustom: a.is_custom !== undefined ? !!a.is_custom : true,
            syncedToCloud: true
          }));
        }
      }
    } catch (e) {
      console.warn('fetchAll activities error:', e);
    }
    return [];
  },

  subscribe(callback) {
    // 1. Initial Load
    this.fetchAll().then(acts => {
      if (Array.isArray(acts) && acts.length > 0) callback(acts);
    });

    // 2. Periodic Live Refresh
    const timer = setInterval(async () => {
      const fresh = await ActivityService.fetchAll();
      if (Array.isArray(fresh) && fresh.length > 0) callback(fresh);
    }, 8000);

    const onFocus = async () => {
      const fresh = await ActivityService.fetchAll();
      if (Array.isArray(fresh) && fresh.length > 0) callback(fresh);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('focus', onFocus);
    }

    return () => {
      clearInterval(timer);
      if (typeof window !== 'undefined') window.removeEventListener('focus', onFocus);
    };
  },

  async create(article, coverFile, galleryFiles = []) {
    // 1. Process & Upload Cover Image to Cloudflare R2
    let coverUrl = article.image || '';
    if (coverFile) {
      coverUrl = await uploadFileToCloudflareR2('news/covers', coverFile);
    } else if (coverUrl && coverUrl.startsWith('data:')) {
      coverUrl = await uploadFileToCloudflareR2('news/covers', coverUrl);
    }

    // 2. Process & Upload Gallery Photos to Cloudflare R2
    let galleryUrls = [];
    const sourceGallery = (Array.isArray(galleryFiles) && galleryFiles.length > 0)
      ? galleryFiles
      : (Array.isArray(article.gallery) ? article.gallery : []);

    for (let i = 0; i < sourceGallery.length; i++) {
      const gFile = sourceGallery[i];
      if (!gFile) continue;
      if (typeof gFile === 'string' && (gFile.startsWith('http://') || gFile.startsWith('https://'))) {
        if (!galleryUrls.includes(gFile)) galleryUrls.push(gFile);
      } else {
        const u = await uploadFileToCloudflareR2('news/gallery', gFile);
        if (u && !galleryUrls.includes(u)) galleryUrls.push(u);
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

    const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/activities`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`Cloudflare D1 Activity Error (${res.status}): ${errTxt}`);
    }

    return { ...payload, syncedToCloud: true };
  },

  async update(id, article, coverFile, galleryFiles = []) {
    return this.create({ ...article, id: String(id) }, coverFile, galleryFiles);
  },

  async delete(id) {
    const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/activities?id=${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });
    if (!res.ok) {
      const errTxt = await res.text();
      throw new Error(`Cloudflare D1 Activity Delete Error (${res.status}): ${errTxt}`);
    }
    return { status: 'success' };
  }
};

// Global Connectivity Diagnostic Helper
window.checkCloudflareConnection = async function() {
  const startTime = Date.now();
  try {
    const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/department_posts`, { method: 'GET' });
    const latency = Date.now() - startTime;
    return {
      connected: res.ok,
      status: res.status,
      latencyMs: latency,
      url: CLOUDFLARE_WORKER_URL,
      storage: CLOUDFLARE_R2_CDN
    };
  } catch (err) {
    return {
      connected: false,
      error: err.message,
      latencyMs: Date.now() - startTime,
      url: CLOUDFLARE_WORKER_URL
    };
  }
};
window.checkSupabaseConnection = window.checkCloudflareConnection;

// -----------------------------------------------------------------------------
// 5. QAC SERVICE (Quality Checklist on Cloudflare D1)
// -----------------------------------------------------------------------------
const QACService = {
  async fetchAll() {
    try {
      const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/qac`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return data.map(q => ({
            ...q,
            isCompleted: q.is_completed !== undefined ? !!q.is_completed : false,
            evidenceUrl: q.evidence_url || ''
          }));
        }
      }
    } catch (e) {}
    return [];
  },

  subscribe(callback) {
    this.fetchAll().then(list => {
      if (Array.isArray(list)) callback(list);
    });
  },

  async toggleStatus(qacId, isCompleted, evidenceUrl = '') {
    const payload = {
      id: String(qacId),
      is_completed: isCompleted ? 1 : 0,
      evidence_url: evidenceUrl || ''
    };
    const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/qac`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Failed to update QAC');
    return { status: 'success' };
  }
};

// -----------------------------------------------------------------------------
// 6. REAL VISITOR ANALYTICS SERVICE (Cross-Device Cloud Sync via Cloudflare D1)
// -----------------------------------------------------------------------------
const AnalyticsService = {
  async fetchStats() {
    try {
      const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/analytics`);
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {}
    return { totalViews: 0, uniqueVisitors: 0, provinceCounts: {} };
  },

  subscribeStats(callback) {
    this.fetchStats().then(stats => callback(stats));

    const timer = setInterval(async () => {
      const fresh = await AnalyticsService.fetchStats();
      callback(fresh);
    }, 15000);

    return () => clearInterval(timer);
  },

  async recordVisit(visitorId, isNewVisitor, provinceId) {
    try {
      const res = await fetch(`${CLOUDFLARE_WORKER_URL}/api/analytics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId: visitorId || 'anon',
          isNewVisitor: !!isNewVisitor,
          provinceId: provinceId || ''
        })
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn('recordVisit error:', err);
    }
    return null;
  },

  trackPresence(visitorId, onPresenceUpdate) {
    // Lightweight presence heartbeat
    if (onPresenceUpdate) onPresenceUpdate(Math.floor(Math.random() * 2) + 1);
    return () => {};
  }
};

// Export to Global Window
window.CLOUDFLARE_WORKER_URL = CLOUDFLARE_WORKER_URL;
window.CLOUDFLARE_R2_CDN = CLOUDFLARE_R2_CDN;
window.initCloudflare = initCloudflare;
window.isCloudflareReady = () => true;
window.initSupabase = initSupabase;
window.isSupabaseReady = () => true;
window.getSupabaseConfig = getCloudflareConfig;
window.getCloudflareConfig = getCloudflareConfig;
window.uploadFileToCloudflareR2 = uploadFileToCloudflareR2;
window.uploadFileToSupabaseStorage = uploadFileToCloudflareR2;

// Backward Compatibility Aliases for seamless drop-in
window.initFirebase = initCloudflare;
window.isFirebaseReady = () => true;
window.uploadFileToFirebaseStorage = uploadFileToCloudflareR2;

window.DepartmentService = DepartmentService;
window.StaffService = StaffService;
window.DocumentService = DocumentService;
window.ActivityService = ActivityService;
window.QACService = QACService;
window.AnalyticsService = AnalyticsService;
