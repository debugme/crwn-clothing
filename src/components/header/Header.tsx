import { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { auth } from '../../firebase'
import { StoreState } from '../../redux/rootReducer'
import { CartDropdown, CartIcon } from '..'

import { selectCartIsVisible } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'

import { StyledHeader, StyledLogo, StyledOptions, StyledOption } from './Styles'

export interface User {
  id: string
  createdAt: Date
  displayName: string
  email: string
}

export interface HeaderProps {
  currentUser?: User | null
  isVisible: boolean
}

export interface HeaderAndRouteProps extends HeaderProps, RouteComponentProps {}

export const _Header: FunctionComponent<HeaderAndRouteProps> = (
  props: HeaderAndRouteProps
): JSX.Element => {
  const { currentUser, history, isVisible } = props

  const handleClick = async () => {
    await auth.signOut()
    history.push('/sign')
  }

  return (
    <StyledHeader>
      <StyledLogo to="/">
        <Logo className="logo" title="C R W N Clothing" />
      </StyledLogo>
      <StyledOptions>
        <StyledOption to="/shop">Shop</StyledOption>
        <StyledOption to="/contact">Contact</StyledOption>
        {!currentUser && <StyledOption to="/sign">Sign in</StyledOption>}
        {currentUser && (
          <StyledOption as="div" className="option" onClick={handleClick}>
            Sign out
          </StyledOption>
        )}
        <CartIcon />
      </StyledOptions>
      {isVisible && <CartDropdown />}
    </StyledHeader>
  )
}

const mapStateToProps = createStructuredSelector<StoreState, HeaderProps>({
  isVisible: selectCartIsVisible,
  currentUser: selectCurrentUser,
})

export const Header = withRouter(connect(mapStateToProps)(_Header))
