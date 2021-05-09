import 'regenerator-runtime';
import CacheHelper from './utilities/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', event => {
  event.waitUntil(
    CacheHelper.cachingAppShell([
      ...assets,
      './',
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
    ]),
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', event => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
