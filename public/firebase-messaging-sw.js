importScripts('https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/6.0.2/firebase-messaging.js')

firebase.initializeApp({
  messagingSenderId: '444671378655'
});

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  const { body } = payload.notification

  const notificationTitle = 'TODO APP'

  return self.registration.showNotification(notificationTitle, body)
})
