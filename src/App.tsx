import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from './components'

import { Home } from './pages/home/Home'
import { Shop } from './pages/shop/Shop'

import './App.scss'

interface AppProps {}

export const App: FunctionComponent<AppProps> = (): JSX.Element => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  </div>
)
