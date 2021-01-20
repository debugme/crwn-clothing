import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { cartReducer, CartState } from './cart/cartReducer'
import { userReducer, UserState } from './user/userReducer'

export interface StoreState {
  cart: CartState
  user: UserState
}

export const _rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})

const persistOptions = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

export const rootReducer = persistReducer(persistOptions, _rootReducer)
