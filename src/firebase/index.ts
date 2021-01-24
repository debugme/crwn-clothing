import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { CollectionSansRouteName } from '../components'
import { Collections } from '../redux/shop/shopReducer'

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

let googleProvider: firebase.auth.GoogleAuthProvider
let auth: FireAuth
let firestore: FireStore
if (!firebase.apps.length) {
  firebase.initializeApp(config)
  googleProvider = new firebase.auth.GoogleAuthProvider()
  googleProvider.setCustomParameters({ prompt: 'select_account' })
  auth = firebase.auth()
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
      console.error('error - could not create user', error)
    }
  }
  return userRef
}

export const buildCollections = (
  list: CollectionSansRouteName[]
): Collections => {
  const build = (collections: Collections, snapshot: any): Collections => {
    const data = snapshot.data()
    const name = encodeURI(data.title.toLowerCase())
    collections[name] = { ...data, routeName: name }
    return collections
  }
  return list.reduce(build, {})
}

type Resolve<T> = (value: T | PromiseLike<T>) => void
type Reject = (reason?: any) => void

const getCurrentUser = () => {
  const handler = (resolve: Resolve<FireUser | null>, reject: Reject) => {
    const handleAuthStateChanged = (user: FireUser | null) => {
      unsubscribe()
      resolve(user)
    }
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged, reject)
  }
  const promise = new Promise(handler)
  return promise
}

export { googleProvider, auth, firestore, getCurrentUser }
