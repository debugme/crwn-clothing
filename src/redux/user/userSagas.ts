import { takeLatest, put, call, all } from 'redux-saga/effects'

import { ActionType, EmailSignInRequestAction } from './userActions'

import { auth, createUser, googleProvider } from '../../firebase'
import { signInFailure, signInSuccess } from './userActionCreators'
import { User } from '../../components'

function* _signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userReference = yield call(createUser, user)
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
    const userSnapshot = yield userReference.get()
    const userData: User = userSnapshot.data()
    const signedInUser = { ...userData, id: userSnapshot.id }
    yield put(signInSuccess(signedInUser))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

function* signInWithGoogle() {
  yield takeLatest(ActionType.GoogleSignInRequest, _signInWithGoogle)
}

function* signInWithEmail() {
  yield takeLatest(ActionType.EmailSignInRequest, _signInWithEmail)
}

export function* userSagas() {
  yield all([call(signInWithGoogle), call(signInWithEmail)])
}
