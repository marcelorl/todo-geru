import * as firebase from 'firebase/app'
import 'firebase/messaging'

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyC1oSrI-TBkXzOOtR8MHPD9f1pGn9fQkHs',
    authDomain: 'bionic-kiln-104012.firebaseapp.com',
    databaseURL: 'https://bionic-kiln-104012.firebaseio.com',
    projectId: 'bionic-kiln-104012',
    storageBucket: 'bionic-kiln-104012.appspot.com',
    messagingSenderId: '444671378655',
    appId: '1:444671378655:web:4820f7997d358ac3'
  })

  const messaging = firebase.messaging()

  messaging.usePublicVapidKey('BAy9FESuqS-bZ1oftnNt6JHLiER_sXW9tRvBRYBqsNTdF57xlfwyXCvK_g0KVLKfa3pDzy3wsOCVJxLvQCrXw30')

  messaging.onMessage(function(payload) {
    navigator.serviceWorker.ready.then(function(registration) {
      const { body, title } = payload.notification

      registration.showNotification(title, { body })
    })
  })
}

export const requestNotificationPermission = async (): Promise<string> => {
  try {
    const messaging = firebase.messaging()

    await messaging.requestPermission()

    const token: string | null = await messaging.getToken()

    if (token === null) {
      return ''
    }

    return token
  } catch (error) {
    console.error(error)

    return ''
  }
}
