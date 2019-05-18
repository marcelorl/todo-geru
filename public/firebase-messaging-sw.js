importScripts('https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/6.0.2/firebase-messaging.js')

firebase.initializeApp({
  'messagingSenderId': 'YOUR-SENDER-ID'
});

const messaging = firebase.messaging()

messaging.onMessage(function(payload) {
  console.log('Message received. ', payload);
  // ...
})

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
})
