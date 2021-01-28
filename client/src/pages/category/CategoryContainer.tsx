import { FunctionComponent } from 'react'
import { connect, ConnectedComponent } from 'react-redux'
import {
  WithSpinner,
  WithSpinnerProps,
} from '../../components/withSpinner/WithSpinner' // TODO Why is WithSpinner undefined if I try to import from '../../components' ?
import { StoreState } from '../../redux/rootReducer'
import { selectCollection } from '../../redux/shop/shopSelectors'
import { Category, CategoryAndRouteProps } from './Category'

const mapStateToProps = (
  storeState: StoreState,
  props: Omit<CategoryAndRouteProps, 'collection'>
) => {
  const { collectionId } = props.match.params as { collectionId: string }
  return {
    collection: selectCollection(collectionId)(storeState),
  }
}

export type ComponentWithSpinnerProps = ConnectedComponent<
  FunctionComponent,
  WithSpinnerProps
>

export const CategoryContainer = WithSpinner(
  connect(mapStateToProps, null)(Category)
) as ComponentWithSpinnerProps

// TODO Is there a nicer way to do this???
// 👆👆👆👆👆👆 We need to remove any props from CategoryProps
// which will be provided by mapStateToProps from what we export
// otherwise Typescript will insist that the consumer of this
// component pass in those props, something we obviously do not want

export default CategoryContainer
