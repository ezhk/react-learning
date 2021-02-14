// Doc: https://developers.google.com/web/fundamentals/primers/service-workers

const enableCache = true;
const CacheName = "messenger-cache-v1";

// Install calls on first open PWA.
self.addEventListener("install", (event) => {
  if (!enableCache) return;

  console.log("[Service Worker] Installing", event);
  event.waitUntil(
    caches.open(CacheName).then((cache) => {
      fetch("/manifest.json")
        .then((response) => response.json())
        .then((payload) => {
          if (payload && payload.hasOwnProperty("cache_urls")) {
            cache.addAll(payload.cache_urls);
          }
        })
        .catch((error) => {
          console.log(`[Service Worker] Cannot fetch manifest: ${error}`);
        });
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating", event);
  const cacheNameWhitelist = [CacheName];

  // Clean previous keys.
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          // Works on change CacheName version.
          if (!cacheNameWhitelist.includes(cacheName)) {
            console.log(`[Service Worker] Deleting cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", function (event) {
  if (!enableCache) return;

  console.log("[Service Worker] Fetching", event);
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Don't use it on development.
      if (response) {
        console.log(`[Service Worker] Cache hit for ${event.request.url}`);
        return response;
      }

      return fetch(event.request, { credentials: "include" });
    })
  );
});

self.addEventListener("push", function (event) {
  console.log("[Subscription] Get message: ", event.data);
  event.waitUntil(self.registration.showNotification("Push title", event.data));
});
