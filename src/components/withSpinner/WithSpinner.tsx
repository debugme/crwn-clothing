import { FunctionComponent, ReactElement } from 'react'

import { SpinnerContainer, SpinnerOverlay } from './Styles'

export interface WithSpinnerProps {
  isLoading: boolean
}

const Spinner: FunctionComponent = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
)

export const WithSpinner = <WrappedComponentProps extends object>(
  WrappedComponent: React.ComponentType<WrappedComponentProps>
): FunctionComponent<WrappedComponentProps & WithSpinnerProps> => (
  props: WrappedComponentProps & WithSpinnerProps
): ReactElement => {
  const { isLoading, ...rest } = props
  if (isLoading) return <Spinner />
  return <WrappedComponent {...(rest as WrappedComponentProps)} />
}
