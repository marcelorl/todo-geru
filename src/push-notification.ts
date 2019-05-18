import firebase from 'firebase'

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '444671378655'
  })
}
