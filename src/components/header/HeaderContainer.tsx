import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartIsVisible } from '../../redux/cart/cartSelectors'
import { StoreState } from '../../redux/rootReducer'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { Header, HeaderProps } from './Header'
import { signOutRequest } from '../../redux/user/userActionCreators'

const mapStateToProps = createStructuredSelector<
  StoreState,
  Pick<HeaderProps, 'isVisible' | 'currentUser'>
>({
  isVisible: selectCartIsVisible,
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = { signOutRequest }

export const HeaderContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header)
)
