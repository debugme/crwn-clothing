import { connect } from 'react-redux'

import { checkUserSession } from '../../redux/user/userActionCreators'

import { App } from './App'

const mapDispatchToProps = {
  checkUserSession,
}

export const AppContainer = connect(null, mapDispatchToProps)(App)
