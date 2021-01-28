import { FunctionComponent } from 'react'
import { SignInContainer, SignUpContainer } from '../../components'

import { StyledSign } from './Styles'

export interface SignProps {}

export const Sign: FunctionComponent<SignProps> = (
  props: SignProps
): JSX.Element => {
  return (
    <StyledSign>
      <SignInContainer />
      <SignUpContainer />
    </StyledSign>
  )
}

export default Sign
