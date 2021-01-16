import { FunctionComponent, useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header, User } from './components'

import { Home } from './pages/home/Home'
import { Shop } from './pages/shop/Shop'
import { Sign } from './pages/sign/Sign'

import { auth, FireUser, createUser } from './firebase'

import './App.scss'

interface AppProps {}

export const App: FunctionComponent<AppProps> = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const handleAuthStateChanged = () => {
    const updateCurrentUser = async (user: FireUser | null) => {
      if (!user) {
        setCurrentUser(null)
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
