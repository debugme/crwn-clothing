import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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
let auth: firebase.auth.Auth
let firestore = null
if (!firebase.apps.length) {
  firebase.initializeApp(config)
  provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ promot: 'select_account' })
  auth = firebase.auth()
  signInWithGoogle = () => auth.signInWithPopup(provider)
  firestore = firebase.firestore()
}

export { signInWithGoogle, auth, firestore }
