self.addEventListener('install', e => {
  e.waitUntil(caches.open('seidenhuhn-v1130').then(c => c.addAll(['./','./seidenhuhn.html','./manifest.webmanifest'])));
});
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
