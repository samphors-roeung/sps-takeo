/**
 * Sovannaphumi School 25, Takeo Campus
 * Production Cloudflare Worker (D1 SQL Database, R2 Storage CDN, Secure Auth & Telegram Proxy)
 * Worker: restless-lake-6152.roeungsamphors007.workers.dev
 */

const DEFAULT_API_KEY = "sps_takeo_cloud_secure_2026";
const DEFAULT_TG_TOKEN = "8842602873:AAEj6aKpsghfZSoglCbawMU4qwcbvooA4zs";
const DEFAULT_TG_CHAT_ID = "-5398276837";

const DEPARTMENT_ROLES = {
  kge_sec: {
    name: "KGE Secondary",
    passwords: ["kgesec2026", "kge@sec2026"]
  },
  kge_kp: {
    name: "KGE Kind & Prim",
    passwords: ["kgesec2026", "kgekp2026", "kge@kp2026"]
  },
  gep: {
    name: "GEP English",
    passwords: ["gep2026", "gep@2026"]
  },
  superadmin: {
    name: "Super Administrator",
    passwords: ["sps2026", "sps@2026", "admin123"]
  }
};

function isAuthorized(request, env) {
  const authHeader = request.headers.get('Authorization') || request.headers.get('X-SPS-Auth') || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  const expected = env.API_SECRET_KEY || DEFAULT_API_KEY;
  if (token === expected) return true;
  if (!env.STRICT_AUTH) return true; // Graceful backward compatibility
  return false;
}

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-SPS-Auth',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // -------------------------------------------------------------
      // 1. SECURE AUTHENTICATION ENDPOINT (/api/auth/login)
      // -------------------------------------------------------------
      if (path === '/api/auth/login' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const reqRole = String(body.role || '').trim().toLowerCase();
        const reqPass = String(body.password || '').trim();

        if (!reqPass) {
          return new Response(JSON.stringify({ success: false, message: 'Password is required' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        // Match against Department or Superadmin
        let matchedRole = null;
        if (DEPARTMENT_ROLES[reqRole] && DEPARTMENT_ROLES[reqRole].passwords.includes(reqPass)) {
          matchedRole = reqRole;
        } else {
          // Check if password matches any role
          for (const [rKey, rData] of Object.entries(DEPARTMENT_ROLES)) {
            if (rData.passwords.includes(reqPass)) {
              matchedRole = rKey;
              break;
            }
          }
        }

        if (matchedRole) {
          const roleInfo = DEPARTMENT_ROLES[matchedRole];
          const token = env.API_SECRET_KEY || DEFAULT_API_KEY;
          return new Response(JSON.stringify({
            success: true,
            role: matchedRole,
            name: roleInfo.name,
            token: token,
            timestamp: new Date().toISOString()
          }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        return new Response(JSON.stringify({ success: false, message: 'Incorrect password' }), {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // -------------------------------------------------------------
      // 2. SECURE TELEGRAM NOTIFICATION PROXY (/api/telegram_notify)
      // -------------------------------------------------------------
      if (path === '/api/telegram_notify' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        const text = String(body.text || '').trim();
        const chatId = String(body.chat_id || env.TELEGRAM_CHAT_ID || DEFAULT_TG_CHAT_ID).trim();
        const botToken = env.TELEGRAM_BOT_TOKEN || DEFAULT_TG_TOKEN;

        if (!text) {
          return new Response(JSON.stringify({ success: false, message: 'Text message is required' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        const tgUrl = `https://api.telegram.org/bot${encodeURIComponent(botToken)}/sendMessage`;
        const tgResp = await fetch(tgUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'HTML',
            disable_web_page_preview: true
          })
        });

        const tgJson = await tgResp.json().catch(() => ({}));
        return new Response(JSON.stringify({ success: tgResp.ok, telegram: tgJson }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // -------------------------------------------------------------
      // 3. FILE UPLOAD TO CLOUDFLARE R2 STORAGE CDN
      // -------------------------------------------------------------
      if (path === '/api/upload' || (path === '/' && request.method === 'POST' && request.headers.get('content-type')?.includes('multipart/form-data'))) {
        const formData = await request.formData();
        const file = formData.get('file');
        const folder = formData.get('folder') || 'uploads';

        if (!file) return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

        const rawExt = file.name ? file.name.split('.').pop().toLowerCase() : 'webp';
        // Sanitize dangerous extensions
        const blockedExts = ['exe', 'bat', 'cmd', 'sh', 'php', 'phtml', 'cgi', 'pl', 'py', 'jar', 'vbs'];
        const safeExt = blockedExts.includes(rawExt) ? 'bin' : rawExt;
        const cleanName = `${folder}/${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${safeExt}`;

        await env.MY_BUCKET.put(cleanName, file.stream(), {
          httpMetadata: { contentType: file.type || 'image/webp' }
        });

        const publicUrl = `https://media.sps-takeo.com/${cleanName}`;
        return new Response(JSON.stringify({ success: true, url: publicUrl, filename: cleanName }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // -------------------------------------------------------------
      // 4. DEPARTMENT POSTS API
      // -------------------------------------------------------------
      if (path === '/api/department_posts') {
        if (request.method === 'GET') {
          const { results } = await env.DB.prepare("SELECT * FROM department_posts ORDER BY updated_at DESC").all();
          const mapped = (results || []).map(r => ({
            ...r,
            gallery: JSON.parse(r.gallery || '[]'),
            publishToActivities: !!r.publish_to_activities,
            publish_to_activities: !!r.publish_to_activities,
            isCustom: !!r.is_custom,
            is_custom: !!r.is_custom,
            syncedToCloud: true
          }));
          return new Response(JSON.stringify(mapped), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'POST') {
          const b = await request.json();
          const now = new Date().toISOString();
          await env.DB.prepare(`
            INSERT INTO department_posts (id, department, module, title, description, date, author, image, attachment_url, attachment_name, gallery, is_custom, publish_to_activities, created_at, updated_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15)
            ON CONFLICT(id) DO UPDATE SET
              department = ?2, module = ?3, title = ?4, description = ?5, date = ?6, author = ?7, image = ?8,
              attachment_url = ?9, attachment_name = ?10, gallery = ?11, is_custom = ?12, publish_to_activities = ?13, updated_at = ?15
          `).bind(
            String(b.id || ('dept_' + Date.now())),
            b.department || 'kge_sec',
            b.module || 'meeting',
            b.title || '',
            b.description || '',
            b.date || now.split('T')[0],
            b.author || 'Takeo Campus',
            b.image || '',
            b.attachment_url || b.attachmentUrl || '',
            b.attachment_name || b.attachmentName || '',
            JSON.stringify(b.gallery || []),
            1,
            (b.publish_to_activities !== false && b.publishToActivities !== false) ? 1 : 0,
            b.created_at || now,
            now
          ).run();
          return new Response(JSON.stringify({ success: true, id: b.id, syncedToCloud: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'DELETE') {
          if (!isAuthorized(request, env)) {
            return new Response(JSON.stringify({ error: 'Unauthorized delete operation' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
          }
          const id = url.searchParams.get('id');
          if (id) await env.DB.prepare("DELETE FROM department_posts WHERE id = ?").bind(id).run();
          return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }
      }

      // -------------------------------------------------------------
      // 5. ACTIVITIES / NEWS API
      // -------------------------------------------------------------
      if (path === '/api/activities') {
        if (request.method === 'GET') {
          const { results } = await env.DB.prepare("SELECT * FROM activities ORDER BY created_at DESC").all();
          const mapped = (results || []).map(r => ({
            ...r,
            gallery: JSON.parse(r.gallery || '[]'),
            attachment: JSON.parse(r.attachment || '{}'),
            isCustom: !!r.is_custom,
            syncedToCloud: true
          }));
          return new Response(JSON.stringify(mapped), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'POST') {
          const b = await request.json();
          const now = new Date().toISOString();
          await env.DB.prepare(`
            INSERT INTO activities (id, title, category, category_label, badge_class, date, image, summary, content, gallery, attachment, is_custom, created_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13)
            ON CONFLICT(id) DO UPDATE SET
              title = ?2, category = ?3, category_label = ?4, badge_class = ?5, date = ?6, image = ?7,
              summary = ?8, content = ?9, gallery = ?10, attachment = ?11, is_custom = ?12
          `).bind(
            String(b.id || ('news_' + Date.now())),
            b.title || '',
            b.category || 'general',
            b.category_label || b.categoryLabel || 'ព័ត៌មានទូទៅ',
            b.badge_class || b.badgeClass || 'badge-student',
            b.date || now.split('T')[0],
            b.image || '',
            b.summary || '',
            b.content || '',
            JSON.stringify(b.gallery || []),
            JSON.stringify(b.attachment || {}),
            1,
            b.created_at || now
          ).run();
          return new Response(JSON.stringify({ success: true, id: b.id, syncedToCloud: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'DELETE') {
          if (!isAuthorized(request, env)) {
            return new Response(JSON.stringify({ error: 'Unauthorized delete operation' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
          }
          const id = url.searchParams.get('id');
          if (id) await env.DB.prepare("DELETE FROM activities WHERE id = ?").bind(id).run();
          return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }
      }

      // -------------------------------------------------------------
      // 6. STAFF DIRECTORY API
      // -------------------------------------------------------------
      if (path === '/api/staff') {
        if (request.method === 'GET') {
          const { results } = await env.DB.prepare("SELECT * FROM staff").all();
          const mapped = (results || []).map(r => ({
            ...r,
            docId: r.id,
            part1: JSON.parse(r.part1 || '{}'),
            part2: JSON.parse(r.part2 || '{}'),
            part3: JSON.parse(r.part3 || '{}')
          }));
          return new Response(JSON.stringify(mapped), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'POST') {
          const b = await request.json();
          const now = new Date().toISOString();
          await env.DB.prepare(`
            INSERT INTO staff (id, name, department, role, phone, photo, part1, part2, part3, last_date, updated_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11)
            ON CONFLICT(id) DO UPDATE SET
              name = ?2, department = ?3, role = ?4, phone = ?5, photo = ?6,
              part1 = ?7, part2 = ?8, part3 = ?9, last_date = ?10, updated_at = ?11
          `).bind(
            String(b.id).trim(),
            b.name || '',
            b.department || '',
            b.role || '',
            b.phone || '',
            b.photo || '',
            JSON.stringify(b.part1 || {}),
            JSON.stringify(b.part2 || {}),
            JSON.stringify(b.part3 || {}),
            b.last_date || new Date().toLocaleDateString(),
            now
          ).run();
          return new Response(JSON.stringify({ success: true, id: b.id }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'DELETE') {
          if (!isAuthorized(request, env)) {
            return new Response(JSON.stringify({ error: 'Unauthorized delete operation' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
          }
          const id = url.searchParams.get('id');
          if (id) await env.DB.prepare("DELETE FROM staff WHERE id = ?").bind(id).run();
          return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }
      }

      // -------------------------------------------------------------
      // 7. DOCUMENTS API
      // -------------------------------------------------------------
      if (path === '/api/documents') {
        if (request.method === 'GET') {
          const { results } = await env.DB.prepare("SELECT * FROM documents ORDER BY created_at DESC").all();
          const mapped = (results || []).map(r => ({
            ...r,
            fileUrl: r.file_url,
            fileName: r.file_name
          }));
          return new Response(JSON.stringify(mapped), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'POST') {
          const b = await request.json();
          const now = new Date().toISOString();
          await env.DB.prepare(`
            INSERT INTO documents (id, code, title, type, date, department, receiver, file_url, file_name, status, created_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11)
            ON CONFLICT(id) DO UPDATE SET
              code = ?2, title = ?3, type = ?4, date = ?5, department = ?6, receiver = ?7,
              file_url = ?8, file_name = ?9, status = ?10
          `).bind(
            String(b.id || ('doc_' + Date.now())),
            b.code || '',
            b.title || '',
            b.type || 'in',
            b.date || now.split('T')[0],
            b.department || '',
            b.receiver || '',
            b.file_url || b.fileUrl || '',
            b.file_name || b.fileName || '',
            b.status || 'Completed',
            now
          ).run();
          return new Response(JSON.stringify({ success: true, id: b.id }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'DELETE') {
          if (!isAuthorized(request, env)) {
            return new Response(JSON.stringify({ error: 'Unauthorized delete operation' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
          }
          const id = url.searchParams.get('id');
          if (id) await env.DB.prepare("DELETE FROM documents WHERE id = ?").bind(id).run();
          return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }
      }

      // -------------------------------------------------------------
      // 8. QAC CHECKLIST API
      // -------------------------------------------------------------
      if (path === '/api/qac') {
        if (request.method === 'GET') {
          const { results } = await env.DB.prepare("SELECT * FROM qac ORDER BY idx ASC").all();
          const mapped = (results || []).map(r => ({
            ...r,
            index: r.idx,
            isCompleted: !!r.is_completed,
            evidenceUrl: r.evidence_url
          }));
          return new Response(JSON.stringify(mapped), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'POST') {
          const b = await request.json();
          const now = new Date().toISOString();
          await env.DB.prepare(`
            UPDATE qac SET is_completed = ?1, evidence_url = ?2, updated_at = ?3 WHERE id = ?4
          `).bind(b.is_completed ? 1 : 0, b.evidence_url || '', now, String(b.id)).run();
          return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }
      }

      // -------------------------------------------------------------
      // 9. SITE ANALYTICS API
      // -------------------------------------------------------------
      if (path === '/api/analytics') {
        if (request.method === 'GET') {
          const res = await env.DB.prepare("SELECT * FROM site_analytics WHERE id = 'global_stats'").first();
          const data = res ? {
            totalViews: res.total_views || 0,
            uniqueVisitors: res.unique_visitors || 0,
            provinceCounts: JSON.parse(res.province_counts || '{}')
          } : { totalViews: 0, uniqueVisitors: 0, provinceCounts: {} };
          return new Response(JSON.stringify(data), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'POST') {
          const b = await request.json();
          const now = new Date().toISOString();
          const existing = await env.DB.prepare("SELECT * FROM site_analytics WHERE id = 'global_stats'").first();
          const curViews = existing ? (Number(existing.total_views) || 0) : 0;
          const curUnique = existing ? (Number(existing.unique_visitors) || 0) : 0;
          let curProvs = {};
          try { if (existing && existing.province_counts) curProvs = JSON.parse(existing.province_counts); } catch(e) {}

          let nextViews = curViews;
          let nextUnique = curUnique;
          let nextProvs = { ...curProvs };

          if (b.action === 'increment') {
            nextViews = curViews + 1;
            nextUnique = curUnique + (b.isNewVisitor ? 1 : (curUnique === 0 ? 1 : 0));
            const pid = String(b.provinceId || 'takeo').trim();
            nextProvs[pid] = (Number(nextProvs[pid]) || 0) + 1;
          } else {
            // Monotonic guard: never allow total_views or unique_visitors to decrease
            nextViews = Math.max(curViews, Number(b.total_views) || 0);
            nextUnique = Math.max(curUnique, Number(b.unique_visitors) || 0);
            const incomingProvs = b.province_counts || {};
            for (const [k, v] of Object.entries(incomingProvs)) {
              nextProvs[k] = Math.max(Number(nextProvs[k]) || 0, Number(v) || 0);
            }
          }

          await env.DB.prepare(`
            INSERT INTO site_analytics (id, total_views, unique_visitors, province_counts, updated_at)
            VALUES ('global_stats', ?1, ?2, ?3, ?4)
            ON CONFLICT(id) DO UPDATE SET
              total_views = ?1, unique_visitors = ?2, province_counts = ?3, updated_at = ?4
          `).bind(nextViews, nextUnique, JSON.stringify(nextProvs), now).run();
          return new Response(JSON.stringify({
            success: true,
            totalViews: nextViews,
            uniqueVisitors: nextUnique,
            provinceCounts: nextProvs
          }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }
      }

      // -------------------------------------------------------------
      // 10. ACADEMIC EVENTS API (/api/academic_events)
      // -------------------------------------------------------------
      if (path === '/api/academic_events') {
        try {
          await env.DB.prepare(`
            CREATE TABLE IF NOT EXISTS academic_events (
              id TEXT PRIMARY KEY,
              title_kh TEXT,
              title_en TEXT,
              date TEXT,
              date_label_kh TEXT,
              date_label_en TEXT,
              category TEXT,
              category_badge_kh TEXT,
              category_badge_en TEXT,
              desc_kh TEXT,
              desc_en TEXT,
              sort_order INTEGER DEFAULT 0,
              created_at TEXT,
              updated_at TEXT
            )
          `).run();
        } catch (tableErr) {
          console.warn('[D1 academic_events table check]', tableErr);
        }

        if (request.method === 'GET') {
          const { results } = await env.DB.prepare("SELECT * FROM academic_events ORDER BY date ASC").all();
          const mapped = (results || []).map(r => ({
            id: r.id,
            titleKh: r.title_kh,
            titleEn: r.title_en,
            date: r.date,
            dateLabelKh: r.date_label_kh,
            dateLabelEn: r.date_label_en,
            category: r.category,
            categoryBadgeKh: r.category_badge_kh,
            categoryBadgeEn: r.category_badge_en,
            descKh: r.desc_kh,
            descEn: r.desc_en,
            sortOrder: r.sort_order || 0
          }));
          return new Response(JSON.stringify(mapped), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'POST') {
          const b = await request.json();
          const now = new Date().toISOString();
          const id = String(b.id || ('event_' + Date.now())).trim();
          await env.DB.prepare(`
            INSERT INTO academic_events (id, title_kh, title_en, date, date_label_kh, date_label_en, category, category_badge_kh, category_badge_en, desc_kh, desc_en, sort_order, created_at, updated_at)
            VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14)
            ON CONFLICT(id) DO UPDATE SET
              title_kh = ?2, title_en = ?3, date = ?4, date_label_kh = ?5, date_label_en = ?6,
              category = ?7, category_badge_kh = ?8, category_badge_en = ?9, desc_kh = ?10, desc_en = ?11,
              sort_order = ?12, updated_at = ?14
          `).bind(
            id,
            b.titleKh || b.title_kh || '',
            b.titleEn || b.title_en || '',
            b.date || '',
            b.dateLabelKh || b.date_label_kh || '',
            b.dateLabelEn || b.date_label_en || '',
            b.category || 'exam',
            b.categoryBadgeKh || b.category_badge_kh || '',
            b.categoryBadgeEn || b.category_badge_en || '',
            b.descKh || b.desc_kh || '',
            b.descEn || b.desc_en || '',
            b.sortOrder || 0,
            b.createdAt || now,
            now
          ).run();
          return new Response(JSON.stringify({ success: true, id, syncedToCloud: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        if (request.method === 'DELETE') {
          if (!isAuthorized(request, env)) {
            return new Response(JSON.stringify({ error: 'Unauthorized delete operation' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
          }
          const id = url.searchParams.get('id');
          if (id) await env.DB.prepare("DELETE FROM academic_events WHERE id = ?").bind(id).run();
          return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }
      }

      return new Response(JSON.stringify({ status: 'active', message: 'SPS Takeo Master Cloudflare API & Storage CDN v8' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};
