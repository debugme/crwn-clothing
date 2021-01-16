import { FunctionComponent, useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from './components'

import { Home } from './pages/home/Home'
import { Shop } from './pages/shop/Shop'
import { Sign } from './pages/sign/Sign'

import { auth } from './firebase'

import './App.scss'

interface AppProps {}

export const App: FunctionComponent<AppProps> = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState(auth.currentUser)

  const handleAuthStateChanged = () => {
    const updateCurrentUser = (user: any) => {
      console.log('updating user to ', user)
      setCurrentUser(user)
    }
    const unsubscribeFromAuth = auth.onAuthStateChanged(updateCurrentUser)
    const handleComponentWillUnmount = () => {
      console.log('unscubscribing from firebase auth')
      unsubscribeFromAuth()
    }
    return handleComponentWillUnmount
  }

  useEffect(handleAuthStateChanged, [])

  return (
    <div>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/sign" component={Sign} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
