if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      //navigator.serviceWorker.registration.scope = "http://127.0.0.1:8000"
      navigator.serviceWorker.register('/static/sw.js').then(function(registration) {
        console.log(registration)
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  