import { combineReducers } from 'redux'
import { cartReducer, CartState } from './cart/cartReducer'
import { userReducer, UserState } from './user/userReducer'

export interface StoreState {
  cart: CartState
  user: UserState
}

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})
