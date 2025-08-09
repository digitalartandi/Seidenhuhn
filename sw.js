
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('seidenhuhn-v1').then(cache => cache.addAll([
    './', './seidenhuhn.html', './manifest.webmanifest',
    './icon-192.png','./icon-512.png','./maskable-512.png'
  ])));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
