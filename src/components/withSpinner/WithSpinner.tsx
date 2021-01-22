import { FunctionComponent, ReactElement } from 'react'

import { SpinnerContainer, SpinnerOverlay } from './Styles'

export interface WithSpinnerProps {
  isLoading: boolean
}

export const WithSpinner = <WrappedComponentProps extends object>(
  WrappedComponent: React.ComponentType<WrappedComponentProps>
): FunctionComponent<WrappedComponentProps & WithSpinnerProps> => (
  props: WrappedComponentProps & WithSpinnerProps
): JSX.Element | ReactElement => {
  const { isLoading, ...rest } = props
  if (isLoading) {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    )
  }
  return <WrappedComponent {...(rest as WrappedComponentProps)} />
}
