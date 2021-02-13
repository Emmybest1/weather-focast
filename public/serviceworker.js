const CACHE_NAME = 'forecast1-v1';
const urlsToCatch = ['index.html', 'offline.html'];

const self = this;

//sw installing
self.addEventListener('install', (ev) => {
  ev.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.group('🦺 SERVICE WORKER INSTALLATION ✅');
        console.log('Caches opened success');
        console.groupEnd();
        return cache.addAll(urlsToCatch);
      })
      .catch((error) => {
        console.group('🦺 SERVICE WORKER INSTALLATION ❌');
        console.error('Caches opened failure', error);
        console.groupEnd();
      })
  );
});

//sw request listening
self.addEventListener('fetch', (ev) => {
  ev.respondWith(
    caches.match(ev.request).then(() => {
      return fetch(ev.request).catch(() => caches.match('offline.html'));
    })
  );
});

//sw activation
self.addEventListener('activate', (ev) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  ev.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
