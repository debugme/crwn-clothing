import { FunctionComponent } from 'react'
import { connect, ConnectedComponent } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { Collection, CollectionCard, CollectionItem } from '../../components'
import { StoreState } from '../../redux/rootReducer'
import { selectCollection } from '../../redux/shop/shopSelectors'

import { StyledCategory, StyledTitle, StyledItems } from './Styles'

export interface CategoryProps {
  collection: Collection
}

export interface CategoryAndRouteProps
  extends CategoryProps,
    RouteComponentProps {}

export const _Category: FunctionComponent<CategoryAndRouteProps> = (
  props: CategoryAndRouteProps
): JSX.Element => {
  const {
    collection: { title, items },
  } = props
  const build = (item: CollectionItem) => {
    return <CollectionCard key={item.id} item={item} />
  }
  const list = items.map(build)
  return (
    <StyledCategory>
      <StyledTitle>{title}</StyledTitle>
      <StyledItems>{list}</StyledItems>
    </StyledCategory>
  )
}

const mapStateToProps = (
  storeState: StoreState,
  props: CategoryAndRouteProps
) => {
  const { collectionId } = props.match.params as { collectionId: string }
  return {
    collection: selectCollection(collectionId)(storeState),
  }
}

export type NoProps = {}

export type ComponentWithNoProps = ConnectedComponent<
  FunctionComponent,
  NoProps
>

export const Category = connect(
  mapStateToProps,
  null
)(_Category) as ComponentWithNoProps

// TODO Is there a nicer way to do this???
// 👆👆👆👆👆👆 We need to remove any props from CategoryProps
// which will be provided by mapStateToProps from what we export
// otherwise Typescript will insist that the consumer of this
// component pass in those props, something we obviously do not want
