import { createStore, applyMiddleware, Store } from 'redux'
import reduxLogger from 'redux-logger'
import { persistStore } from 'redux-persist'
import { rootReducer, StoreState } from './rootReducer'

const middlewareList = [reduxLogger]
const middleware = applyMiddleware(...middlewareList)

export const store: Store<StoreState, any> = createStore(
  rootReducer,
  middleware
)

export const persistor = persistStore(store)
