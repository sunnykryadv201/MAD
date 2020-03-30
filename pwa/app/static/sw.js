  var CACHE_NAME = 'my-site-cache-v1';
  var urlsToCache = [
    '.',
    '/',
    'static/init.js',
    'static/ui.js',
    'static/materialize.css',
    'static/materialize.js',
    'static/app.js',
    'static/css/materialize.min.css',
    'static/css/style.css',
    'static/manifest.json',
    'static/img/icons/background1.jpg'

  ];
  self.addEventListener('fetch', function(event) {
    console.log(event.request)
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
  
          return fetch(event.request).then(
            function(response) {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                
                console.log(response)
                return response;
              }
              
  
              // IMPORTANT: Clone the response. A response is a stream
              // and because we want the browser to consume the response
              // as well as the cache consuming the response, we need
              // to clone it so we have two streams.
              var responseToCache = response.clone();
  
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });
