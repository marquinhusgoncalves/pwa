var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
		navigator.serviceWorker
			.register('/sw.js')
			.then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registered');
    })
    .catch(function(err) {
      console.log(err)
    })
  });
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
})
