import { combineReducers } from 'redux'
import { cartReducer } from './cart/cartReducer'
import { userReducer } from './user/userReducer'

import { User } from '../components'

export interface StoreState {
  cart: { isVisible: boolean }
  user: { currentUser: User }
}

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})
