import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import { Homepage } from './pages/homepage/Homepage'

interface AppProps {}

export const App: FunctionComponent<AppProps> = (): JSX.Element => (
  <div>
    <BrowserRouter>
      <div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)
