const staticDev = "munihuaura-site-v1"
const assets = [
  "/",
  "/index.html",
  "/images/munihuaura.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDev).then(cache => {
      cache.addAll(assets)
    })
  )
})