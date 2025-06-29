const CACHE_NAME = 'fsss-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './lib/sha3.min.js',
  './lib/seedrandom.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
