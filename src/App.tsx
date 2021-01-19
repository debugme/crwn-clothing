import { FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header, User } from './components'

import { Home } from './pages/home/Home'
import { Shop } from './pages/shop/Shop'
import { Sign } from './pages/sign/Sign'

import { auth, FireUser, createUser } from './firebase'

import {
  setCurrentUser,
  SetCurrentUserActionCreator,
} from './redux/user/userActions'

import './App.scss'

interface AppProps {
  setCurrentUser: SetCurrentUserActionCreator
}

export const _App: FunctionComponent<AppProps> = (
  props: AppProps
): JSX.Element => {
  const { setCurrentUser } = props

  const handleAuthStateChanged = () => {
    const updateCurrentUser = async (user: FireUser | null) => {
      if (!user) {
        setCurrentUser(user)
        return
      }
      const userRef = await createUser(user)
      if (!userRef) return
      userRef.onSnapshot((snapshot) => {
        const { id } = snapshot
        const { displayName, email, createdAt } = snapshot.data() as any
        const user: User = { id, displayName, email, createdAt }
        setCurrentUser(user)
      })
    }
    const unsubscribeFromAuth = auth.onAuthStateChanged(updateCurrentUser)
    const handleComponentWillUnmount = () => unsubscribeFromAuth()

    return handleComponentWillUnmount
  }

  useEffect(handleAuthStateChanged, [setCurrentUser])

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/sign" component={Sign} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const mapDispatchToProps = {
  setCurrentUser,
}

export const App = connect(null, mapDispatchToProps)(_App)
