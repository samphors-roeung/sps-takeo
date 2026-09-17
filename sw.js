// Sovannaphumi School 25, Takeo Campus - Network-First Real-time Master Service Worker
const CACHE_NAME = 'sps-takeo-v7.7-master';

self.addEventListener('install', (event) => {
  self.skipWaiting();
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
    event.request.url.includes('supabase.co') ||
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

  // Network-First Strategy: Always fetch fresh code from network, fallback to cache when offline
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
