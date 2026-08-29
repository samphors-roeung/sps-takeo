// =============================================================================
// ONE-CLICK MIGRATION BRIDGE: GOOGLE SHEETS -> FIREBASE CLOUD FIRESTORE
// Automatically transfers all existing data from 4 Google Sheets into Firebase
// =============================================================================

async function startMigrationToFirebase(onProgressUpdate) {
  if (!window.isFirebaseReady || !window.isFirebaseReady()) {
    throw new Error('សូមបញ្ចូល Firebase Config ជាមុនសិន មុនពេលចាប់ផ្តើម Migrate!');
  }

  const db = firebase.firestore();
  const results = { staff: 0, docs: 0, news: 0, qac: 0 };

  // 1. MIGRATE STAFF PROFILE (131 staff members)
  if (onProgressUpdate) onProgressUpdate('កំពុងទាញយកទិន្នន័យបុគ្គលិកពី Google Sheet...');
  try {
    const STAFF_GVIZ = "https://docs.google.com/spreadsheets/d/1eSv6AKKmQwd0MbjyPOHCBWMyd1I5SnHtiiOmz0Fxx90/gviz/tq?tqx=out:json";
    const res = await fetch(STAFF_GVIZ);
    const text = await res.text();
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const data = JSON.parse(jsonStr);
    const rows = data.table.rows;

    let batch = db.batch();
    let batchCount = 0;

    for (let r = 0; r < rows.length; r++) {
      const c = rows[r].c;
      if (!c || !c[0]) continue;

      let rawId = c[0].v;
      let staffId = String(rawId).trim();
      if (c[0].f) staffId = String(c[0].f).trim();

      let part1 = {}, part2 = {}, part3 = {};
      try { part1 = JSON.parse(c[6]?.v || "{}"); } catch(e) {}
      try { part2 = JSON.parse(c[7]?.v || "{}"); } catch(e) {}
      try { part3 = JSON.parse(c[8]?.v || "{}"); } catch(e) {}

      const staffData = {
        id: staffId,
        name: c[1]?.v || "",
        role: c[2]?.v || "",
        department: c[3]?.v || "",
        phone: c[4]?.v || "",
        photo: c[5]?.v || "",
        part1: part1,
        part2: part2,
        part3: part3,
        lastDate: c[9]?.v || new Date().toLocaleDateString(),
        migratedAt: firebase.firestore.FieldValue.serverTimestamp()
      };

      const docRef = db.collection('staff').doc(staffId);
      batch.set(docRef, staffData, { merge: true });
      batchCount++;
      results.staff++;

      if (batchCount >= 400) {
        await batch.commit();
        batch = db.batch();
        batchCount = 0;
      }
    }
    if (batchCount > 0) await batch.commit();
    if (onProgressUpdate) onProgressUpdate(`✅ បាន Migrate បុគ្គលិកចំនួន ${results.staff} នាក់រួចរាល់!`);
  } catch (err) {
    console.error('Staff migration error:', err);
  }

  // 2. MIGRATE DOCUMENTS IN & OUT
  if (onProgressUpdate) onProgressUpdate('កំពុងទាញយកឯកសារ In/Out ពី Google Sheet...');
  try {
    const DOCS_GVIZ = "https://docs.google.com/spreadsheets/d/1_NmRGbV5A1r-CGeYfIOzHESV49RzIlaed-QCmuCFinM/gviz/tq?tqx=out:json";
    const res = await fetch(DOCS_GVIZ);
    const text = await res.text();
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const data = JSON.parse(jsonStr);
    const rows = data.table.rows;

    let batch = db.batch();
    for (let r = 0; r < rows.length; r++) {
      const c = rows[r].c;
      if (!c) continue;
      const docId = 'doc_' + (r + 1);
      const docData = {
        code: c[0]?.v || `DOC-${r+1}`,
        title: c[1]?.v || "Official Document",
        type: String(c[2]?.v || "in").toLowerCase().includes("out") ? "out" : "in",
        date: c[3]?.v || new Date().toISOString().split('T')[0],
        department: c[4]?.v || "Administration",
        receiver: c[5]?.v || "School Office",
        fileUrl: c[6]?.v || "",
        fileName: c[1]?.v || "Document",
        status: "Completed",
        migratedAt: firebase.firestore.FieldValue.serverTimestamp()
      };
      batch.set(db.collection('documents').doc(docId), docData, { merge: true });
      results.docs++;
    }
    await batch.commit();
    if (onProgressUpdate) onProgressUpdate(`✅ បាន Migrate ឯកសារ In/Out ចំនួន ${results.docs} ឯកសាររួចរាល់!`);
  } catch (err) {
    console.error('Docs migration error:', err);
  }

  // 3. MIGRATE ACTIVITIES (NEWS)
  if (onProgressUpdate) onProgressUpdate('កំពុងទាញយក Activities & News...');
  try {
    const defaultNews = window.DEFAULT_NEWS || [];
    let batch = db.batch();
    for (let i = 0; i < defaultNews.length; i++) {
      const art = defaultNews[i];
      const artId = String(art.id);
      batch.set(db.collection('activities').doc(artId), {
        ...art,
        migratedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      results.news++;
    }
    await batch.commit();
    if (onProgressUpdate) onProgressUpdate(`✅ បាន Migrate ព័ត៌មាន និងសកម្មភាពចំនួន ${results.news} អត្ថបទរួចរាល់!`);
  } catch (err) {
    console.error('News migration error:', err);
  }

  // 4. MIGRATE QAC CHECKLIST
  if (onProgressUpdate) onProgressUpdate('កំពុងរៀបចំទិន្នន័យ QAC CL...');
  try {
    const QAC_GVIZ = "https://docs.google.com/spreadsheets/d/1vH6Vv7nDAsXmfgtVBamndhuAEb9ehitxXMYp5fDLywA/gviz/tq?tqx=out:json";
    const res = await fetch(QAC_GVIZ);
    const text = await res.text();
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const data = JSON.parse(jsonStr);
    const rows = data.table.rows;

    let batch = db.batch();
    for (let r = 0; r < rows.length; r++) {
      const c = rows[r].c;
      if (!c) continue;
      const qacId = 'qac_' + (r + 1);
      const isDone = c[2]?.v === true || c[2]?.v === "TRUE" || c[2]?.v === 1;
      batch.set(db.collection('qac').doc(qacId), {
        index: r + 1,
        standard: c[0]?.v || `Standard ${r+1}`,
        description: c[1]?.v || "",
        isCompleted: isDone,
        evidenceUrl: c[3]?.v || "",
        migratedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      results.qac++;
    }
    await batch.commit();
    if (onProgressUpdate) onProgressUpdate(`✅ បាន Migrate QAC Checklist ចំនួន ${results.qac} ចំណុចរួចរាល់!`);
  } catch (err) {
    console.error('QAC migration error:', err);
  }

  return results;
}

window.startMigrationToFirebase = startMigrationToFirebase;
