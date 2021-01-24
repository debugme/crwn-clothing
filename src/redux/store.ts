import { applyMiddleware, createStore, Store } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../redux/rootSaga'
import { rootReducer, StoreState } from './rootReducer'

const sagaMiddleware = createSagaMiddleware()
const middlewareList = [sagaMiddleware]
const middleware = applyMiddleware(...middlewareList)

export const store: Store<StoreState, any> = createStore(
  rootReducer,
  middleware
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
