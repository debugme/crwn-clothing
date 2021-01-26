import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import { SignIn } from './SignIn'

import {
  emailSignInRequest,
  googleSignInRequest,
} from '../../redux/user/userActionCreators'

const mapDispatchToProps = { emailSignInRequest, googleSignInRequest }

export const SignInContainer = connect(
  null,
  mapDispatchToProps
)(withRouter(SignIn))
