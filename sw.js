// Sovannaphumi School 25, Takeo Campus - Network-First Real-time Master Service Worker (PWA Offline & Push)
const CACHE_NAME = 'sps-takeo-v8.2.6-master';

const PRECACHE_SHELL = [
  './',
  './index.html',
  './style.css?v=8.0.5',
  './app.js?v=8.0.5',
  './cloudflare-config.js?v=8.0.5',
  './manifest.json',
  './20250819094329432.jpeg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_SHELL).catch((err) => {
        console.warn('[SW Precache Warning]', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Purging outdated cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim()).then(() => {
      return self.clients.matchAll({ type: 'window' }).then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'SW_UPDATED', cacheName: CACHE_NAME });
        });
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Never intercept non-GET requests or dynamic cloud APIs & WebSockets
  if (
    event.request.method !== 'GET' ||
    event.request.url.includes('workers.dev') ||
    event.request.url.includes('media.sps-takeo.com') ||
    event.request.url.includes('saladigital.org') ||
    event.request.url.includes('ipapi.co') ||
    event.request.url.includes('ipwhois.app') ||
    event.request.url.includes('freeipapi.com') ||
    event.request.url.includes('ipwho.is') ||
    event.request.url.includes('ip-api.com') ||
    event.request.url.includes('script.google.com') ||
    event.request.url.includes('google.visualization') ||
    event.request.url.includes('firestore') ||
    event.request.url.includes('firebase') ||
    event.request.url.includes('googleapis.com') ||
    event.request.url.startsWith('chrome-extension://') ||
    event.request.url.startsWith('ws://') ||
    event.request.url.startsWith('wss://')
  ) {
    return;
  }

  // Handle HTML document navigation when offline
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match('./index.html') || caches.match('./') || caches.match(event.request);
        })
    );
    return;
  }

  // Network-First Strategy for other assets: fetch fresh code from network, fallback to cache when offline
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});

// PWA Notification Click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow('./');
    })
  );
});
