import { FunctionComponent } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { auth, FirebaseUser } from '../../firebase'

import './Header.scss'

export interface HeaderProps {
  currentUser: FirebaseUser
}

export interface HeaderAndRouteProps extends HeaderProps, RouteComponentProps {}

export const _Header: FunctionComponent<HeaderAndRouteProps> = (
  props: HeaderAndRouteProps
): JSX.Element => {
  const { currentUser, history } = props
  const handleClick = () => auth.signOut().then(() => history.push('/'))
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" title="C R W N Clothing" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {!currentUser && (
          <Link className="option" to="/sign">
            Sign in
          </Link>
        )}
        {currentUser && (
          <div className="option" onClick={handleClick}>
            Sign out
          </div>
        )}
      </div>
    </div>
  )
}

export const Header = withRouter(_Header)
