import { combineReducers } from 'redux'
import { userReducer } from './user/userReducer'

import { User } from '../components'

export interface StoreState {
  user: { currentUser: User }
}

export const rootReducer = combineReducers({
  user: userReducer,
})
