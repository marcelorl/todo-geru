importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js')

firebase.initializeApp({
  apiKey: "AIzaSyC1oSrI-TBkXzOOtR8MHPD9f1pGn9fQkHs",
  authDomain: "bionic-kiln-104012.firebaseapp.com",
  databaseURL: "https://bionic-kiln-104012.firebaseio.com",
  projectId: "bionic-kiln-104012",
  storageBucket: "bionic-kiln-104012.appspot.com",
  messagingSenderId: "444671378655",
  appId: "1:444671378655:web:4820f7997d358ac3"
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage(function(payload) {
  const { body } = payload.notification

  const notificationTitle = 'TODO GERU'

  return self.registration.showNotification(notificationTitle, body)
})
