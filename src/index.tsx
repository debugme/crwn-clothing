import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './App'

import { store } from './redux/store'

const jsxNode = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
const domNode = document.querySelector('#root')

ReactDOM.render(jsxNode, domNode)
