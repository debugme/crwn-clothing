import { FunctionComponent, ReactElement } from 'react'
import { Spinner } from './Spinner'

export interface WithSpinnerProps {
  isLoading: boolean
}

export const WithSpinner = <WrappedComponentProps extends object>(
  WrappedComponent: React.ComponentType<WrappedComponentProps>
): FunctionComponent<WrappedComponentProps & WithSpinnerProps> => (
  props: WrappedComponentProps & WithSpinnerProps
): ReactElement => {
  const { isLoading, ...rest } = props
  if (isLoading) return <Spinner />
  return <WrappedComponent {...(rest as WrappedComponentProps)} />
}
