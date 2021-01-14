import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

const jsxNode = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
const domNode = document.querySelector('#root')

ReactDOM.render(jsxNode, domNode)
