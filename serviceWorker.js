// Install the service worker
this.addEventListener('install',function(event){
    event.waitUntil(
        caches.open('v1').then(function(caches){
            // The cache will fail if any of these resources can't be saved.
            return caches.addAll([
                // Path is relative to the origin, not the app directory.
				'/Selfie App with PWA/',
				'/Selfie App with PWA/index.html',
				'/Selfie App with PWA/assets/css/styles.css',
				'/Selfie App with PWA/assets/fonts/MaterialIcons-Regular.woff2',
				'/Selfie App with PWA/assets/js/script.js',
				'/Selfie App with PWA/assets/icons/ic-face.png',
				'/Selfie App with PWA/assets/icons/ic-face-large.png',
				'/Selfie App with PWA/manifest.json'
            ])
            .then(function(){
                console.log('Success! App is available Offline.');
            })
        })
    );
});

// Define what happens when a resource is requested.
// For our app we do a Cache-first approach.
self.addEventListener('fetch',function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            
            return response || fetch(event.request);
        })
    );
});