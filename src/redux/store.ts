import { applyMiddleware, createStore, Store } from 'redux'
import reduxLogger from 'redux-logger'
import { persistStore } from 'redux-persist'
import { rootReducer, StoreState } from './rootReducer'

const isProduction = process.env.NODE_ENV === 'production'
const middlewareList = []
if (!isProduction) middlewareList.push(reduxLogger)

const middleware = applyMiddleware(...middlewareList)

export const store: Store<StoreState, any> = createStore(
  rootReducer,
  middleware
)

export const persistor = persistStore(store)
