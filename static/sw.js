importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "website-starter",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.1e9a070983457b58047e.js",
    "revision": "d2a5693b254088f16cd22f63bcbf7033"
  },
  {
    "url": "/_nuxt/layouts/default.676e66055f957987caa8.js",
    "revision": "ca3d655d073c9f5f34ea7641e8ee859d"
  },
  {
    "url": "/_nuxt/manifest.f360834d6fc7266ef66b.js",
    "revision": "98daf3a1134aa40459f1937b85365f31"
  },
  {
    "url": "/_nuxt/pages/_id.e3ed14bfd60519678f39.js",
    "revision": "533e8cb724988fc35c150d96e41fcf39"
  },
  {
    "url": "/_nuxt/pages/index.011e4775cdbba61f9ee9.js",
    "revision": "9ce7c57c3d169e52e6d12f760aff42af"
  },
  {
    "url": "/_nuxt/vendor.34da6d044a803adc1af6.js",
    "revision": "dbbe5d1ac6dcf1d9d649c8f2a2b964b4"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

