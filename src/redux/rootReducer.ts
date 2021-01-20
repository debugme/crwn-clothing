import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { cartReducer, CartState } from './cart/cartReducer'
import { directoryReducer, DirectoryState } from './directory/directoryReducer'
import { shopReducer, ShopState } from './shop/shopReducer'
import { userReducer, UserState } from './user/userReducer'

export interface StoreState {
  cart: CartState
  directory: DirectoryState
  user: UserState
  shop: ShopState
}

export const _rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  user: userReducer,
  shop: shopReducer,
})

const persistOptions = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

export const rootReducer = persistReducer(persistOptions, _rootReducer)
