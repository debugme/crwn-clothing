import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { AppContainer } from './components'
import { persistor, store } from './redux/store'
import { Body } from './Styles'

const jsxNode = (
  <React.StrictMode>
    <Body />
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
const domNode = document.querySelector('#root')

ReactDOM.render(jsxNode, domNode)
