import { all, call } from 'redux-saga/effects'
import { cartSagas } from './cart/cartSagas'
import { shopSagas } from './shop/shopSagas'
import { userSagas } from './user/userSagas'

export function* rootSaga() {
  const list = [cartSagas, shopSagas, userSagas]
  const array = list.map((method) => call(method))
  yield all(array)
}
