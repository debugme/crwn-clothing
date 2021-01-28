import { FunctionComponent } from 'react'
import { SpinnerContainer, SpinnerOverlay } from './Styles'

export const Spinner: FunctionComponent = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
)
