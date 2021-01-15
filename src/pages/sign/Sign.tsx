import { FunctionComponent } from 'react'
import { SignIn } from '../../components'

import './Sign.scss'

export interface SignProps {}

export const Sign: FunctionComponent<SignProps> = (
  props: SignProps
): JSX.Element => {
  return (
    <div className="sign">
      <SignIn />
    </div>
  )
}
