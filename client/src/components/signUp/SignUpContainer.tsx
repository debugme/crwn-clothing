import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'
import { emailSignUpRequest } from '../../redux/user/userActionCreators'
import { SignUp } from './SignUp'

const mapDispatchToProps = {
  emailSignUpRequest,
}

export const SignUpContainer = connect(
  null,
  mapDispatchToProps
)(withRouter(SignUp))
