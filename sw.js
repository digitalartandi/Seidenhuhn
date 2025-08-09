self.addEventListener('install', e => {
  e.waitUntil(caches.open('seidenhuhn-v1100').then(c => c.addAll(['./','./seidenhuhn.html','./manifest.webmanifest','./meadow.webp','./wood.webp','./cover.webp','./hen.webp'])));
});
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
