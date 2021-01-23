import { FunctionComponent } from 'react'
import { WithSpinner, WithSpinnerProps } from '../withSpinner/WithSpinner'
import { CollectionOverview } from './CollectionOverview'

console.log('[CollectionOverviewContainer] WithSpinner is ', WithSpinner)

export const CollectionOverviewContainer = WithSpinner(CollectionOverview) as FunctionComponent<WithSpinnerProps>