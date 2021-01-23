import { FunctionComponent, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { HeaderContainer, User } from '..'
import { auth, createUser, FireUser } from '../../firebase'
import { CheckoutContainer, HomeContainer, ShopContainer, Sign } from '../../pages'
import { SetCurrentUserActionCreator } from '../../redux/user/userActionCreators'

interface AppProps {
  setCurrentUser: SetCurrentUserActionCreator
}

export const App: FunctionComponent<AppProps> = (
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
        const { displayName, email, createdAt } = snapshot.data() as Omit<
          User,
          'id'
        >
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
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/shop" component={ShopContainer} />
        <Route exact path="/sign" component={Sign} />
        <Route exact path="/checkout" component={CheckoutContainer} />
      </Switch>
    </div>
  )
}
