import { takeLatest, put, call, all } from 'redux-saga/effects'

import {
  ActionType,
  CheckUserSessionAction,
  EmailSignInRequestAction,
} from './userActions'

import {
  auth,
  createUser,
  getCurrentUser,
  googleProvider,
} from '../../firebase'
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
} from './userActionCreators'
import { User } from '../../components'

function* _signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userReference = yield call(createUser, user)
    console.log('[signInWithGoogle:1]', userReference)
    const userSnapshot = yield userReference.get()
    const userData: User = userSnapshot.data()
    const signedInUser = { ...userData, id: userSnapshot.id }
    yield put(signInSuccess(signedInUser))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

function* _signInWithEmail(action: EmailSignInRequestAction) {
  try {
    const { email, password } = action.payload
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    const userReference = yield call(createUser, user)
    console.log('[signInWithEmail:1]', userReference)
    const userSnapshot = yield userReference.get()
    const userData: User = userSnapshot.data()
    const signedInUser = { ...userData, id: userSnapshot.id }
    yield put(signInSuccess(signedInUser))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

function* _checkUserSession(action: CheckUserSessionAction) {
  try {
    const user = yield getCurrentUser()
    if (!user) {
      return
    }
    const {
      uid: id,
      displayName,
      email,
      metadata: { creationTime: createdAt },
    } = user
    const signedInUser = { id, displayName, email, createdAt }
    yield put(signInSuccess(signedInUser))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

function* _signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error.message))
  }
}

function* signInWithGoogle() {
  yield takeLatest(ActionType.GoogleSignInRequest, _signInWithGoogle)
}

function* signInWithEmail() {
  yield takeLatest(ActionType.EmailSignInRequest, _signInWithEmail)
}

function* checkUserSession() {
  yield takeLatest(ActionType.CheckUserSession, _checkUserSession)
}

function* signOut() {
  yield takeLatest(ActionType.SignOutRequest, _signOut)
}

export function* userSagas() {
  const list = [signInWithGoogle, signInWithEmail, checkUserSession, signOut]
  const array = list.map((method) => call(method))
  yield all(array)
}
