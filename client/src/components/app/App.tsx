import { FunctionComponent, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { HeaderContainer } from '..'
import {
  CheckoutContainer,
  HomeContainer,
  ShopContainer,
  Sign,
} from '../../pages'
import { CheckUserSessionActionCreator } from '../../redux/user/userActionCreators'

interface AppProps {
  checkUserSession: CheckUserSessionActionCreator
}

export const App: FunctionComponent<AppProps> = (
  props: AppProps
): JSX.Element => {
  const { checkUserSession } = props

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

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
