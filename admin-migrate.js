// =============================================================================
// ONE-CLICK MIGRATION BRIDGE: GOOGLE SHEETS & LOCAL -> CLOUDFLARE D1 CLOUD
// Automatically transfers all existing data into Cloudflare D1 Database & R2
// =============================================================================

const MIGRATION_WORKER_URL = "https://restless-lake-6152.roeungsamphors007.workers.dev";

async function startMigrationToCloudflare(onProgressUpdate) {
  const results = { staff: 0, docs: 0, news: 0, qac: 0, depts: 0 };

  // 1. MIGRATE STAFF PROFILE (131 staff members from Google Sheets -> Cloudflare D1)
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
    if (onProgressUpdate) onProgressUpdate(`កំពុងផ្ទេរបុគ្គលិក ${uniqueStaff.length} នាក់ ទៅកាន់ Cloudflare D1...`);
    
    for (let i = 0; i < uniqueStaff.length; i++) {
      const s = uniqueStaff[i];
      try {
        await fetch(`${MIGRATION_WORKER_URL}/api/staff`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(s)
        });
        results.staff++;
        if (i % 15 === 0 && onProgressUpdate) {
          onProgressUpdate(`កំពុងផ្ទេរបុគ្គលិក... (${results.staff}/${uniqueStaff.length})`);
        }
      } catch (err) {}
    }
    if (onProgressUpdate) onProgressUpdate(`✅ បាន Migrate បុគ្គលិកចំនួន ${results.staff} នាក់ ទៅ Cloudflare D1 រួចរាល់!`);
  } catch (err) {
    console.error('Staff migration error:', err);
  }

  // 2. MIGRATE DOCUMENTS IN & OUT (Google Sheets -> Cloudflare D1)
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
      const val0 = String(c[0]?.v || '').trim();
      const val1 = String(c[1]?.v || '').trim();
      if (val0 === 'DID' || val0.toLowerCase() === 'code' || val1 === 'Name' || val1 === 'Title') continue;
      if (!val0 && !val1) continue;
      docList.push({
        id: 'doc_' + (r + 1),
        code: val0 || `DOC-${r+1}`,
        title: val1 || "Official Document",
        type: String(c[2]?.v || "in").toLowerCase().includes("out") ? "out" : "in",
        date: c[3]?.v || new Date().toISOString().split('T')[0],
        department: c[4]?.v || "Administration",
        receiver: c[5]?.v || "School Office",
        file_url: c[6]?.v || "",
        file_name: val1 || "Document",
        status: "Completed"
      });
    }

    if (docList.length > 0) {
      for (const d of docList) {
        try {
          await fetch(`${MIGRATION_WORKER_URL}/api/documents`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(d)
          });
          results.docs++;
        } catch (e) {}
      }
    }
    if (onProgressUpdate) onProgressUpdate(`✅ បាន Migrate ឯកសារ In/Out ចំនួន ${results.docs} ឯកសារទៅ Cloudflare D1!`);
  } catch (err) {
    console.error('Docs migration error:', err);
  }

  // 3. MIGRATE LOCAL DEPARTMENT POSTS TO CLOUDFLARE D1
  if (onProgressUpdate) onProgressUpdate('កំពុង Sync ព័ត៌មានដេប៉ាតឺម៉ង់ទៅ Cloudflare D1...');
  try {
    const rawLocal = localStorage.getItem('sps_dept_custom_posts');
    if (rawLocal) {
      const parsed = JSON.parse(rawLocal);
      if (Array.isArray(parsed) && parsed.length > 0) {
        for (const p of parsed) {
          try {
            await fetch(`${MIGRATION_WORKER_URL}/api/department_posts`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: String(p.id),
                department: p.department || 'kge_sec',
                module: p.module || 'meeting',
                title: p.title || '',
                description: p.description || '',
                date: p.date || new Date().toISOString().split('T')[0],
                author: p.author || 'Takeo Campus',
                image: p.image || '',
                attachment_url: p.attachmentUrl || p.attachment_url || '',
                attachment_name: p.attachmentName || p.attachment_name || '',
                gallery: Array.isArray(p.gallery) ? p.gallery : [],
                publish_to_activities: (p.publish_to_activities !== false && p.publishToActivities !== false),
                is_custom: true
              })
            });
            results.depts++;
          } catch (e) {}
        }
      }
    }
    if (onProgressUpdate) onProgressUpdate(`✅ បាន Sync ព័ត៌មានដេប៉ាតឺម៉ង់ចំនួន ${results.depts} អត្ថបទ!`);
  } catch (err) {
    console.error('Dept posts migration error:', err);
  }

  // 4. MIGRATE LOCAL ACTIVITIES / NEWS TO CLOUDFLARE D1
  if (onProgressUpdate) onProgressUpdate('កំពុង Sync ព័ត៌មានសាលាទៅ Cloudflare D1...');
  try {
    const rawActs = localStorage.getItem('sps_custom_activities');
    if (rawActs) {
      const parsedActs = JSON.parse(rawActs);
      if (Array.isArray(parsedActs) && parsedActs.length > 0) {
        for (const a of parsedActs) {
          try {
            await fetch(`${MIGRATION_WORKER_URL}/api/activities`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: String(a.id || ('news_' + Date.now())),
                title: a.title || '',
                category: a.category || 'general',
                category_label: a.categoryLabel || a.category_label || 'ព័ត៌មានទូទៅ',
                badge_class: a.badgeClass || a.badge_class || 'badge-student',
                date: a.date || new Date().toISOString().split('T')[0],
                image: a.image || '',
                summary: a.summary || '',
                content: a.content || '',
                gallery: Array.isArray(a.gallery) ? a.gallery : [],
                attachment: a.attachment || null,
                is_custom: true
              })
            });
            results.news++;
          } catch (e) {}
        }
      }
    }
    if (onProgressUpdate) onProgressUpdate(`✅ បាន Sync ព័ត៌មានសាលាចំនួន ${results.news} អត្ថបទ!`);
  } catch (err) {
    console.error('Activities migration error:', err);
  }

  return results;
}

// Aliases for 100% backward compatibility
window.startMigrationToCloudflare = startMigrationToCloudflare;
window.startMigrationToSupabase = startMigrationToCloudflare;
window.startMigrationToFirebase = startMigrationToCloudflare;
