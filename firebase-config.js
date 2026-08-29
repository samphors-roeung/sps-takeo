// =============================================================================
// SOVANNAPHUMI SCHOOL TAKEO CAMPUS - FIREBASE SERVICE LAYER
// Handles Real-time Cloud Firestore & High-Speed Firebase Storage CDN
// =============================================================================

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: AIzaSy_SPS_TAKEO_PLACEHOLDER_KEY,
  authDomain: sps-takeo-portal.firebaseapp.com,
  projectId: sps-takeo-portal,
  storageBucket: sps-takeo-portal.appspot.com,
  messagingSenderId: 123456789012,
  appId: 1:123456789012:web:abcdef123456
};

function getFirebaseConfig() {
  try {
    const custom = localStorage.getItem('sps_firebase_config');
    if (custom) return JSON.parse(custom);
  } catch (e) {}
  return DEFAULT_FIREBASE_CONFIG;
}

let firebaseApp = null;
let firestoreDb = null;
let firebaseStorage = null;
let isFirebaseReady = false;

function initFirebase() {
  if (typeof firebase === 'undefined') {
    console.warn('Firebase SDK not loaded yet.');
    return false;
  }
  try {
    const config = getFirebaseConfig();
    if (!firebase.apps || firebase.apps.length === 0) {
      firebaseApp = firebase.initializeApp(config);
    } else {
      firebaseApp = firebase.app();
    }
    firestoreDb = firebase.firestore();
    firebaseStorage = firebase.storage();
    
    if (config.apiKey && !config.apiKey.includes('PLACEHOLDER')) {
      isFirebaseReady = true;
      console.log('🔥 Firebase initialized successfully! Connected to project:', config.projectId);
    } else {
      console.info('ℹ️ Firebase is in setup mode. Please provide your Firebase Config in Admin settings.');
    }
    return true;
  } catch (err) {
    console.error('Firebase init error:', err);
    return false;
  }
}

async function uploadFileToFirebaseStorage(storagePath, file, onProgress) {
  if (!isFirebaseReady || !firebaseStorage) {
    throw new Error('Firebase Storage is not configured yet. Please configure Firebase in Admin Settings.');
  }

  const storageRef = firebaseStorage.ref().child(storagePath);
  const uploadTask = storageRef.put(file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (onProgress) onProgress(Math.round(progress));
      },
      (error) => {
        console.error('Storage upload error:', error);
        reject(error);
      },
      async () => {
        const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
        resolve(downloadUrl);
      }
    );
  });
}

const StaffService = {
  subscribe(callback) {
    if (!isFirebaseReady || !firestoreDb) return () => {};
    return firestoreDb.collection('staff').orderBy('id', 'asc').onSnapshot(
      (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => list.push({ docId: doc.id, ...doc.data() }));
        callback(list);
      },
      (err) => console.warn('Staff subscription error:', err)
    );
  },

  async getById(staffId) {
    if (!isFirebaseReady || !firestoreDb) return null;
    const cleanId = String(staffId).trim();
    const docRef = await firestoreDb.collection('staff').doc(cleanId).get();
    if (docRef.exists) return { docId: docRef.id, ...docRef.data() };
    
    const q = await firestoreDb.collection('staff').where('id', '==', cleanId).limit(1).get();
    if (!q.empty) return { docId: q.docs[0].id, ...q.docs[0].data() };
    return null;
  },

  async saveSubmission(submission) {
    if (!isFirebaseReady || !firestoreDb) {
      throw new Error('Firebase is not ready.');
    }
    const staffId = String(submission.id).trim();
    const docRef = firestoreDb.collection('staff').doc(staffId);
    const existing = await docRef.get();
    const existingData = existing.exists ? existing.data() : {};

    const mergedPart1 = { ...(existingData.part1 || {}), ...(submission.part1 || {}) };
    const mergedPart2 = { ...(existingData.part2 || {}), ...(submission.part2 || {}) };
    const mergedPart3 = { ...(existingData.part3 || {}), ...(submission.part3 || {}) };

    const updatePayload = {
      id: staffId,
      name: submission.name || existingData.name || '',
      department: submission.department || existingData.department || '',
      role: submission.role || existingData.role || '',
      phone: submission.phone || existingData.phone || '',
      part1: mergedPart1,
      part2: mergedPart2,
      part3: mergedPart3,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastDate: new Date().toLocaleDateString()
    };

    if (submission.photoUrl) updatePayload.photo = submission.photoUrl;

    await docRef.set(updatePayload, { merge: true });
    return { status: 'success', id: staffId };
  }
};

const DocumentService = {
  subscribe(callback) {
    if (!isFirebaseReady || !firestoreDb) return () => {};
    return firestoreDb.collection('documents').orderBy('createdAt', 'desc').onSnapshot(
      (snapshot) => {
        const docs = [];
        snapshot.forEach((doc) => docs.push({ id: doc.id, ...doc.data() }));
        callback(docs);
      },
      (err) => console.warn('Documents subscription error:', err)
    );
  },

  async create(docData, fileBlob) {
    if (!isFirebaseReady || !firestoreDb) throw new Error('Firebase not ready');
    let fileUrl = docData.fileUrl || '';

    if (fileBlob) {
      const fileName = ${Date.now()}_;
      fileUrl = await uploadFileToFirebaseStorage(documents/, fileBlob);
    }

    const newDoc = {
      code: docData.code || '',
      title: docData.title || '',
      type: docData.type || 'in',
      date: docData.date || new Date().toISOString().split('T')[0],
      department: docData.department || '',
      receiver: docData.receiver || '',
      fileUrl: fileUrl,
      fileName: fileBlob ? fileBlob.name : (docData.fileName || ''),
      status: docData.status || 'Completed',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await firestoreDb.collection('documents').add(newDoc);
    return { id: docRef.id, ...newDoc };
  },

  async delete(docId) {
    if (!isFirebaseReady || !firestoreDb) throw new Error('Firebase not ready');
    await firestoreDb.collection('documents').doc(docId).delete();
    return { status: 'success' };
  }
};

const ActivityService = {
  subscribe(callback) {
    if (!isFirebaseReady || !firestoreDb) return () => {};
    return firestoreDb.collection('activities').orderBy('createdAt', 'desc').onSnapshot(
      (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));
        callback(list);
      },
      (err) => console.warn('Activities subscription error:', err)
    );
  },

  async create(article, coverFile, galleryFiles = []) {
    if (!isFirebaseReady || !firestoreDb) throw new Error('Firebase not ready');
    
    let coverUrl = article.image || '';
    if (coverFile) {
      const fileName = cover__;
      coverUrl = await uploadFileToFirebaseStorage(ctivities/, coverFile);
    }

    const galleryUrls = [...(article.gallery || [])];
    for (let i = 0; i < galleryFiles.length; i++) {
      const gFile = galleryFiles[i];
      const gName = gallery___;
      const url = await uploadFileToFirebaseStorage(ctivities/, gFile);
      galleryUrls.push(url);
    }

    const payload = {
      title: article.title || '',
      category: article.category || 'general',
      categoryLabel: article.categoryLabel || 'ព័ត៌មានទូទៅ',
      badgeClass: article.badgeClass || 'badge-student',
      date: article.date || new Date().toISOString().split('T')[0],
      image: coverUrl,
      summary: article.summary || '',
      content: article.content || '',
      gallery: galleryUrls,
      attachment: article.attachment || null,
      isCustom: true,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await firestoreDb.collection('activities').add(payload);
    return { id: docRef.id, ...payload };
  },

  async update(id, article) {
    if (!isFirebaseReady || !firestoreDb) throw new Error('Firebase not ready');
    await firestoreDb.collection('activities').doc(id).update({
      ...article,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { status: 'success' };
  },

  async delete(id) {
    if (!isFirebaseReady || !firestoreDb) throw new Error('Firebase not ready');
    await firestoreDb.collection('activities').doc(id).delete();
    return { status: 'success' };
  }
};

const QACService = {
  subscribe(callback) {
    if (!isFirebaseReady || !firestoreDb) return () => {};
    return firestoreDb.collection('qac').orderBy('index', 'asc').onSnapshot(
      (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));
        callback(list);
      },
      (err) => console.warn('QAC subscription error:', err)
    );
  },

  async updateItem(id, updates) {
    if (!isFirebaseReady || !firestoreDb) throw new Error('Firebase not ready');
    await firestoreDb.collection('qac').doc(id).set({
      ...updates,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    return { status: 'success' };
  }
};

window.initFirebase = initFirebase;
window.isFirebaseReady = () => isFirebaseReady;
window.StaffService = StaffService;
window.DocumentService = DocumentService;
window.ActivityService = ActivityService;
window.QACService = QACService;
window.uploadFileToFirebaseStorage = uploadFileToFirebaseStorage;
