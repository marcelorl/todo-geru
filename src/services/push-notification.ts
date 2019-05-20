import * as firebase from 'firebase/app'
import 'firebase/messaging'

import axios from './request'

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '444671378655'
  })

  const messaging = firebase.messaging()

  messaging.usePublicVapidKey('BAy9FESuqS-bZ1oftnNt6JHLiER_sXW9tRvBRYBqsNTdF57xlfwyXCvK_g0KVLKfa3pDzy3wsOCVJxLvQCrXw30')

  messaging.onMessage(function(payload) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(function (registration) {
        const { body, title } = payload.notification

        registration.showNotification(title, {body})
      })
    }
  })
}

export const requestNotificationPermission = async () => {
  try {
    const messaging = firebase.messaging()

    await messaging.requestPermission()

    let token = await messaging.getToken()

    if (!token) {
      token = ''
    }

    if (!localStorage.getItem('notificationIds')) {
      await axios.post('notificationIds', { id: token })
    }

    localStorage.setItem('notificationIds', token)

    return token
  } catch (error) {
    console.error(error)
  }
}

export const setOnRefreshTokenListener = () => {
  const messaging = firebase.messaging()

  messaging.onTokenRefresh(async function() {
    await requestNotificationPermission()
  })
}
