// Sovannaphumi School Takeo Campus - Network-First Service Worker
const CACHE_NAME = 'sps-takeo-v3';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Never intercept dynamic APIs
  if (
    event.request.method !== 'GET' ||
    event.request.url.includes('script.google.com') ||
    event.request.url.includes('google.visualization') ||
    event.request.url.includes('firestore') ||
    event.request.url.includes('firebase')
  ) {
    return;
  }

  // Network-First: Always fetch latest version, fallback to cache when offline
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
