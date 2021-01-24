import { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { CartDropdownContainer, CartIconContainer } from '..'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { SignOutRequestActionCreator } from '../../redux/user/userActionCreators'
import { StyledHeader, StyledLogo, StyledOption, StyledOptions } from './Styles'

export interface User {
  id: string
  createdAt: Date
  displayName: string
  email: string
}

export interface HeaderProps {
  currentUser?: User | null
  isVisible: boolean
  signOutRequest: SignOutRequestActionCreator
}

export interface HeaderAndRouteProps extends HeaderProps, RouteComponentProps {}

export const Header: FunctionComponent<HeaderAndRouteProps> = (
  props: HeaderAndRouteProps
): JSX.Element => {
  const { currentUser, isVisible, signOutRequest } = props
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
          <StyledOption as="div" className="option" onClick={signOutRequest}>
            Sign out
          </StyledOption>
        )}
        <CartIconContainer />
      </StyledOptions>
      {isVisible && <CartDropdownContainer />}
    </StyledHeader>
  )
}
