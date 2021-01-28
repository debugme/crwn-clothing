import { FunctionComponent } from 'react'
import { WithSpinner, WithSpinnerProps } from '../withSpinner/WithSpinner' // TODO Why is WithSpinner undefined if I try to import from '..' ?
import { CollectionOverview } from './CollectionOverview'

export const CollectionOverviewContainer = WithSpinner(
  CollectionOverview
) as FunctionComponent<WithSpinnerProps>

export default CollectionOverviewContainer
