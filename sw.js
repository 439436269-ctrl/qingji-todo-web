// 轻记 TODO 离线缓存：network-first，失败回退本地缓存
const CACHE = 'qingji-v1';
const ASSETS = ['./', 'index.html', 'sw.js', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(ASSETS.map(a => c.add(a).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r && r.ok && r.type === 'basic') {
        const cl = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, cl)).catch(() => {});
      }
      return r;
    }).catch(() =>
      caches.match(e.request, { ignoreSearch: true })
        .then(m => m || caches.match('index.html'))
    )
  );
});
