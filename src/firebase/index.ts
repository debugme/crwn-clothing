import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export type FireUnsubscribe = firebase.Unsubscribe
export type FireUser = firebase.User
export type FireStore = firebase.firestore.Firestore
export type FireAuth = firebase.auth.Auth
export type FireUserCredential = firebase.auth.UserCredential | null

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
}

let provider: firebase.auth.GoogleAuthProvider
let signInWithGoogle: () => Promise<firebase.auth.UserCredential>
let auth: FireAuth
let firestore: FireStore
if (!firebase.apps.length) {
  firebase.initializeApp(config)
  provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ promot: 'select_account' })
  auth = firebase.auth()
  signInWithGoogle = () => {
    return auth.signInWithPopup(provider)
  }
  firestore = firebase.firestore()
}

export const createUser = async (user: FireUser) => {
  const { uid, displayName, email } = user
  const pathToDocument = `/users/${uid}`
  const userRef = firestore.doc(pathToDocument)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    try {
      const createdAt = new Date()
      await userRef.set({ displayName, email, createdAt })
    } catch (error) {
      console.log('error - could not create user', error)
    }
  }
  return userRef
}

export { signInWithGoogle, auth, firestore }
