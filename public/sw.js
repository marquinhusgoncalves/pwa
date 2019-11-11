self.addEventListener('install', function(event) {
    console.log('[Service worker] Install Service Worker...', event)
});

self.addEventListener('activate', function(event) {
    console.log('[Service worker] Activating Service Worker...', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
})
