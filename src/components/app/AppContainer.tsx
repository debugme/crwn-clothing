import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/user/userActionCreators'
import { App } from './App'

const mapDispatchToProps = {
  setCurrentUser,
}

export const AppContainer = connect(null, mapDispatchToProps)(App)
