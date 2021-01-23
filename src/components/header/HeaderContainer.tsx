import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartIsVisible } from '../../redux/cart/cartSelectors'
import { StoreState } from '../../redux/rootReducer'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { Header, HeaderProps } from './Header'

const mapStateToProps = createStructuredSelector<StoreState, HeaderProps>({
  isVisible: selectCartIsVisible,
  currentUser: selectCurrentUser,
})

export const HeaderContainer = withRouter(connect(mapStateToProps)(Header))
 