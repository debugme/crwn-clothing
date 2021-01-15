import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './Header.scss'

export interface HeaderProps {}

export const Header: FunctionComponent<HeaderProps> = (
  props: HeaderProps
): JSX.Element => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  )
}
