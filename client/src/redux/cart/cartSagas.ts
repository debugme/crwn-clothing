import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ActionType } from '../user/userActions'
import { clearCart } from '../cart/cartActionCreators'

function* _clearAllItemsFromCart() {
  yield put(clearCart())
}

function* clearAllItemsFromCart() {
  yield takeLatest(ActionType.SignOutSuccess, _clearAllItemsFromCart)
}

export function* cartSagas() {
  const list = [clearAllItemsFromCart]
  const array = list.map((method) => call(method))
  yield all(array)
}
