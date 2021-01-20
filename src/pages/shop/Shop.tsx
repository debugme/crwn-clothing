import { FunctionComponent } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { CollectionOverview } from '../../components'
import { selectCollections } from '../../redux/shop/shopSelectors'
import { StoreState } from '../../redux/rootReducer'

import { Category } from '../category/Category'
import { Collections } from '../../redux/shop/shopReducer'

interface ShopProps {
  collections: Collections
}

interface ShopAndRouteProps extends ShopProps, RouteComponentProps {}

export const _Shop: FunctionComponent<ShopAndRouteProps> = (
  props: ShopAndRouteProps
): JSX.Element => {
  return (
    <div className="shop">
      <Route exact path="/shop">
        <CollectionOverview {...props} />
      </Route>
      <Route path={`${props.match.path}/:collectionId`} component={Category} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector<StoreState, ShopProps>({
  collections: selectCollections,
})

export const Shop = connect(mapStateToProps, null)(_Shop)
