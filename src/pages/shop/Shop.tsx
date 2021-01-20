import { FunctionComponent } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Collection, CollectionOverview } from '../../components'
import { selectCollections } from '../../redux/shop/shopSelectors'
import { StoreState } from '../../redux/rootReducer'

import { Category } from '../category/Category'

interface ShopProps {
  collectionList: Collection[]
}

interface ShopAndRouteProps extends ShopProps, RouteComponentProps {}

export const _Shop: FunctionComponent<ShopAndRouteProps> = (
  props: ShopAndRouteProps
): JSX.Element => {
  const { collectionList, match } = props
  return (
    <div className="shop">
      <Route exact path="/shop">
        <CollectionOverview collectionList={collectionList} />
      </Route>
      <Route path={`${match.path}/:collectionId`} component={Category} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector<StoreState, ShopProps>({
  collectionList: selectCollections,
})

export const Shop = connect(mapStateToProps, null)(_Shop)
