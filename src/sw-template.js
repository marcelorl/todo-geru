// @ts-ignore
if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js'
  )
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded')

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([])

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    })

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    )
  } else {
    console.log('Workbox could not be loaded. No Offline support')
  }
}
