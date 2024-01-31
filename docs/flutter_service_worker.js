'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5e5025eb08c4f9690032558ea493202c",
"assets/AssetManifest.bin.json": "17544a8ce2993afd3f959a0fcdbda9e5",
"assets/AssetManifest.json": "06f1534a5a6f8e31b9f8a0360a4e10b0",
"assets/assets/authScreen/background.png": "ab0f0aae206be6b81a88cffbe44a7026",
"assets/assets/bar_graph.png": "923ff41fae880e64f710986fe7960e2e",
"assets/assets/dialog_flow_auth.json": "f8299de8d1c5ca49256747189a9894b2",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/introScreen/dashlogo.png": "1714fcf4b7bc9731caaf7e9be165b0ae",
"assets/assets/introScreen/earthsat5.png": "fca2529901be3f015588ae37d37fc68c",
"assets/assets/introScreen/introbackground.png": "fdb2a63631579d99bf84529e7129320b",
"assets/assets/introScreen/introbackground2.png": "2d25a9b1183a1e4b43ff2df3b7b5d0f7",
"assets/assets/introScreen/introbackground3.png": "32bc6f98bac7241de04509e3e3fb3623",
"assets/assets/introScreen/introbackground4.png": "4289f93f9ef69ca2ab34fa86ad67e626",
"assets/assets/introScreen/treelogo.png": "e4983f28436a4d3f34e755ea57c6be6b",
"assets/assets/main/bhalu.gif": "2c36a54138930af5a30152e4ecbe2dba",
"assets/assets/main/logo.png": "88bcd4d7b36ed7846b0141efc054eabf",
"assets/assets/MainMap.html": "99b72a28b6bbb711fce48fab8e8ea8e5",
"assets/assets/MainMap.png": "45338b9233ddddd0a50f04001eed52c6",
"assets/assets/NeighboringTile_1.html": "fc9695c80167f77401bce5cca07191cf",
"assets/assets/NeighboringTile_1.png": "884211b9ca363179ccca68b4f911afe3",
"assets/assets/NeighboringTile_2.html": "04d767c55c8a7f2fcbcde9709c922646",
"assets/assets/NeighboringTile_2.png": "23b478a59516d05b690952cb3d4e6fda",
"assets/assets/NeighboringTile_3.html": "214851567412d323de9ebd29c3026d94",
"assets/assets/NeighboringTile_3.png": "d6960739025b71f4ee62254d4f2ca688",
"assets/assets/NeighboringTile_4.html": "a34bdc70639320d7f07404fae0287aac",
"assets/assets/NeighboringTile_4.png": "9b8b6d4d02352166efd170934830cc1f",
"assets/assets/project/dashboard1.png": "829769bbb604da42b5a1e7f6fca9a88e",
"assets/assets/project/dashboard2.png": "a6a7dfaf64a90dfd1aaf242c2e6850e1",
"assets/assets/project/dashboard3.png": "0d83798ef0919c389977c584238ac95b",
"assets/assets/project/dashboard4.png": "e9109b32e1aa11dc824f97d60c032885",
"assets/assets/project/projectTile0.png": "50d6d992a8f1373efa27c7733c06a51b",
"assets/assets/project/projectTile100.png": "1714fcf4b7bc9731caaf7e9be165b0ae",
"assets/assets/project/projectTile25.png": "fca2529901be3f015588ae37d37fc68c",
"assets/assets/project/projectTile50.png": "d1e87912360ee46df4c22ee8fe8ebc75",
"assets/assets/project/projectTile75.png": "1a0f6c8612dab158a794c8bc1fbc0059",
"assets/assets/tree_png.png": "066c2712247ac0e5c844213e53c286df",
"assets/FontManifest.json": "9931b4073c41d8a0dc587991ed84044e",
"assets/fonts/MaterialIcons-Regular.otf": "31ebc355bb6b72ce744ffb618c1f4a37",
"assets/NOTICES": "a621e6de11301d9e8d0187cb2c5633d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f7cb923640a810e6b7eb20c6f1c0c059",
"/": "f7cb923640a810e6b7eb20c6f1c0c059",
"main.dart.js": "b91d4ed980680a5fcee195fcc968e070",
"manifest.json": "08f6188cfa6c279cd19760aec4044ccb",
"version.json": "7c6f9be8ac5bc8b647c46811432c790b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
