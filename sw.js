self.addEventListener('install', e => {
  e.waitUntil(caches.open('seidenhuhn-v7').then(c => c.addAll(['./','./seidenhuhn.html','./manifest.webmanifest','./cover.webp','./hen.webp'])));
});
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
