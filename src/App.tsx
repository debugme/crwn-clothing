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
  clearCurrentUser,
  ClearCurrentUserActionCreator,
  SetCurrentUserActionCreator,
} from './redux/user/userActions'

import './App.scss'

interface AppProps {
  setCurrentUser: SetCurrentUserActionCreator
  clearCurrentUser: ClearCurrentUserActionCreator
}

export const _App: FunctionComponent<AppProps> = (
  props: AppProps
): JSX.Element => {
  const { setCurrentUser, clearCurrentUser } = props

  const handleAuthStateChanged = () => {
    const updateCurrentUser = async (user: FireUser | null) => {
      if (!user) {
        clearCurrentUser()
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

  useEffect(handleAuthStateChanged, [setCurrentUser, clearCurrentUser])

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/sign" component={Sign} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const mapDispatchToProps = {
  setCurrentUser,
  clearCurrentUser,
}

export const App = connect(null, mapDispatchToProps)(_App)
