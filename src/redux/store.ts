import { createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'

import { rootReducer } from './rootReducer'

const middlewareList = [reduxLogger]
const middleware = applyMiddleware(...middlewareList)

export const store = createStore(rootReducer, middleware)
