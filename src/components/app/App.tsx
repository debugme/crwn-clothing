import { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import { HeaderContainer } from '..'
import {
  CheckoutContainer,
  HomeContainer,
  ShopContainer,
  Sign,
} from '../../pages'

interface AppProps {}

export const App: FunctionComponent<AppProps> = (
  props: AppProps
): JSX.Element => {
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
