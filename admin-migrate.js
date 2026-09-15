// =============================================================================
// ONE-CLICK MIGRATION BRIDGE: GOOGLE SHEETS & LOCAL -> SUPABASE CLOUD
// Automatically transfers all existing data from Google Sheets into Supabase
// =============================================================================

async function startMigrationToSupabase(onProgressUpdate) {
  if (!window.isSupabaseReady || !window.isSupabaseReady()) {
    throw new Error('សូមរង់ចាំ Supabase ភ្ជាប់រួចរាល់ ឬពិនិត្យ API Key!');
  }

  const config = window.getSupabaseConfig ? window.getSupabaseConfig() : {
    url: "https://hrhvoqgbnsslmldlteyz.supabase.co",
    anonKey: "sb_publishable_OEx6pGJgWlVQzq9ICq1Zyg_TAugnhKQ"
  };

  const headers = {
    'apikey': config.anonKey,
    'Authorization': `Bearer ${config.anonKey}`,
    'Content-Type': 'application/json',
    'Prefer': 'resolution=merge-duplicates'
  };

  const results = { staff: 0, docs: 0, news: 0, qac: 0, depts: 0 };

  // 1. MIGRATE STAFF PROFILE (131 staff members)
  if (onProgressUpdate) onProgressUpdate('កំពុងទាញយកទិន្នន័យបុគ្គលិកពី Google Sheet...');
  try {
    const STAFF_GVIZ = "https://docs.google.com/spreadsheets/d/1eSv6AKKmQwd0MbjyPOHCBWMyd1I5SnHtiiOmz0Fxx90/gviz/tq?tqx=out:json";
    const res = await fetch(STAFF_GVIZ);
    const text = await res.text();
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const data = JSON.parse(jsonStr);
    const rows = data.table.rows;

    const staffMap = new Map();

    for (let r = 0; r < rows.length; r++) {
      const c = rows[r].c;
      if (!c || !c[0] || c[0].v === null) continue;

      let rawId = c[0].v;
      let staffId = String(rawId).trim();
      if (c[0].f) staffId = String(c[0].f).trim();
      if (!staffId || staffId === 'null' || staffId === 'undefined') continue;

      let part1 = {}, part2 = {}, part3 = {};
      try { part1 = JSON.parse(c[6]?.v || "{}"); } catch(e) {}
      try { part2 = JSON.parse(c[7]?.v || "{}"); } catch(e) {}
      try { part3 = JSON.parse(c[8]?.v || "{}"); } catch(e) {}

      const existing = staffMap.get(staffId) || {};
      staffMap.set(staffId, {
        id: staffId,
        name: c[1]?.v || existing.name || "",
        role: c[2]?.v || existing.role || "",
        department: c[3]?.v || existing.department || "",
        phone: c[4]?.v || existing.phone || "",
        photo: c[5]?.v || existing.photo || "",
        part1: { ...(existing.part1 || {}), ...part1 },
        part2: { ...(existing.part2 || {}), ...part2 },
        part3: { ...(existing.part3 || {}), ...part3 },
        last_date: c[9]?.v || existing.last_date || new Date().toLocaleDateString()
      });
    }

    const uniqueStaff = Array.from(staffMap.values());
    for (let i = 0; i < uniqueStaff.length; i += 20) {
      const chunk = uniqueStaff.slice(i, i + 20);
      await fetch(`${config.url}/rest/v1/staff`, {
        method: 'POST',
        headers,
        body: JSON.stringify(chunk)
      });
      results.staff += chunk.length;
    }
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

    const docList = [];
    for (let r = 0; r < rows.length; r++) {
      const c = rows[r].c;
      if (!c) continue;
      docList.push({
        id: 'doc_' + (r + 1),
        code: c[0]?.v || `DOC-${r+1}`,
        title: c[1]?.v || "Official Document",
        type: String(c[2]?.v || "in").toLowerCase().includes("out") ? "out" : "in",
        date: c[3]?.v || new Date().toISOString().split('T')[0],
        department: c[4]?.v || "Administration",
        receiver: c[5]?.v || "School Office",
        file_url: c[6]?.v || "",
        file_name: c[1]?.v || "Document",
        status: "Completed"
      });
    }

    if (docList.length > 0) {
      await fetch(`${config.url}/rest/v1/documents`, {
        method: 'POST',
        headers,
        body: JSON.stringify(docList)
      });
      results.docs = docList.length;
    }
    if (onProgressUpdate) onProgressUpdate(`✅ បាន Migrate ឯកសារ In/Out ចំនួន ${results.docs} ឯកសាររួចរាល់!`);
  } catch (err) {
    console.error('Docs migration error:', err);
  }

  // 3. MIGRATE LOCAL DEPARTMENT POSTS TO SUPABASE
  if (onProgressUpdate) onProgressUpdate('កំពុង Sync ព័ត៌មានដេប៉ាតឺម៉ង់ទៅ Supabase...');
  try {
    const rawLocal = localStorage.getItem('sps_dept_custom_posts');
    if (rawLocal) {
      const parsed = JSON.parse(rawLocal);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const postsToSync = parsed.map(p => ({
          id: String(p.id),
          department: p.department || 'kge_sec',
          module: p.module || 'meeting',
          title: p.title || '',
          description: p.description || '',
          date: p.date || new Date().toISOString().split('T')[0],
          author: p.author || 'Takeo Campus',
          image: p.image || null,
          attachment_url: p.attachmentUrl || p.attachment_url || null,
          attachment_name: p.attachmentName || p.attachment_name || null,
          gallery: Array.isArray(p.gallery) ? p.gallery : [],
          is_custom: true
        }));

        await fetch(`${config.url}/rest/v1/department_posts`, {
          method: 'POST',
          headers,
          body: JSON.stringify(postsToSync)
        });
        results.depts = postsToSync.length;
      }
    }
    if (onProgressUpdate) onProgressUpdate(`✅ បាន Sync ព័ត៌មានដេប៉ាតឺម៉ង់ចំនួន ${results.depts} អត្ថបទ!`);
  } catch (err) {
    console.error('Dept posts migration error:', err);
  }

  return results;
}

// Aliases for compatibility
window.startMigrationToSupabase = startMigrationToSupabase;
window.startMigrationToFirebase = startMigrationToSupabase;
