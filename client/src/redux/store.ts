import {
  AnyAction,
  applyMiddleware,
  createStore,
  Dispatch,
  Middleware,
  Store,
  compose,
} from 'redux'
import { persistStore } from 'redux-persist'
import createDebugMiddleware from 'redux-immutable-state-invariant'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../redux/rootSaga'
import { rootReducer, StoreState } from './rootReducer'

const debugMiddleware = createDebugMiddleware()
const sagaMiddleware = createSagaMiddleware()

const isProduction = process.env.NODE_ENV === 'production'
const idempotent: Middleware = () => (next: Dispatch<AnyAction>) => (
  action: any
) => next(action)

const middlewareList = [
  isProduction ? idempotent : debugMiddleware,
  sagaMiddleware,
]

const appliedMiddleware = applyMiddleware(...middlewareList)

const middleware = isProduction
  ? compose(appliedMiddleware)
  : composeWithDevTools(appliedMiddleware)

export const store: Store<StoreState, any> = createStore(
  rootReducer,
  middleware
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
