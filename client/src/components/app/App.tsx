import React, { FunctionComponent, useEffect, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { HeaderContainer } from '..'

import { CheckUserSessionActionCreator } from '../../redux/user/userActionCreators'
import { Spinner } from '../withSpinner/Spinner'

const CheckoutContainer = lazy(
  () => import('../../pages/checkout/CheckoutContainer')
)
const HomeContainer = lazy(() => import('../../pages/home/HomeContainer'))
const ShopContainer = lazy(() => import('../../pages/shop/ShopContainer'))
const Sign = lazy(() => import('../../pages/sign/Sign'))

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
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/shop" component={ShopContainer} />
          <Route exact path="/sign" component={Sign} />
          <Route exact path="/checkout" component={CheckoutContainer} />
        </Switch>
      </Suspense>
    </div>
  )
}
