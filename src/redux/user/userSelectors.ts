import { createSelector } from 'reselect'
import { StoreState } from '../rootReducer'
import { UserState } from './userReducer'

export const selectUser = (storeState: StoreState) => storeState.user

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: UserState) => user.currentUser
)
