import { FunctionComponent } from 'react'
import { SignInContainer, SignUp } from '../../components'

import { StyledSign } from './Styles'

export interface SignProps {}

export const Sign: FunctionComponent<SignProps> = (
  props: SignProps
): JSX.Element => {
  return (
    <StyledSign>
      <SignInContainer />
      <SignUp />
    </StyledSign>
  )
}
