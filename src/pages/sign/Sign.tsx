import { FunctionComponent } from 'react'
import { SignIn, SignUp } from '../../components'

import { StyledSign } from './Styles'

export interface SignProps {}

export const Sign: FunctionComponent<SignProps> = (
  props: SignProps
): JSX.Element => {
  return (
    <StyledSign>
      <SignIn />
      <SignUp />
    </StyledSign>
  )
}
