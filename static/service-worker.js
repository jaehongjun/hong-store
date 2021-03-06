self.addEventListener("install", event => {
  const offlinePage = new Request("/");
  event.waitUntil(
    fetch(offlinePage).then(response => {
      return caches.open("nomad-store").then(cache => {
        return cache.put(offlinePage, response);
      });
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(error => {
      return caches.open("nomad-store").then(cache => cache.match("/"));
    })
  );
});

self.addEventListener("push", event => {
  const title = "Hong Store";
  const options = {
    body: event.data.text(),
    icon: "./static/192.png",
    image: "./static/192.png",
    Badge: "./static/192.png"
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
