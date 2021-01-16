import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase'

import './Header.scss'

export interface HeaderProps {
  currentUser: any
}

export const Header: FunctionComponent<HeaderProps> = (
  props: HeaderProps
): JSX.Element => {
  const { currentUser } = props
  const handleClick = () => auth.signOut()
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
