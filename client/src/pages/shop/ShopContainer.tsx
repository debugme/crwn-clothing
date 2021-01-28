import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { StoreState } from '../../redux/rootReducer'
import {
  addCollectionsFailure,
  addCollectionsRequest,
  addCollectionsSuccess,
} from '../../redux/shop/shopActionCreators'
import {
  selectCollections,
  selectIsCollectionsLoaded,
  selectIsRequesting,
} from '../../redux/shop/shopSelectors'
import { Shop, ShopProps } from './Shop'

const mapStateToProps = createStructuredSelector<
  StoreState,
  Pick<ShopProps, 'collections' | 'isRequesting' | 'isCollectionsLoaded'>
>({
  collections: selectCollections,
  isCollectionsLoaded: selectIsCollectionsLoaded,
  isRequesting: selectIsRequesting,
})

const mapDispatchToProps = {
  addCollectionsRequest,
  addCollectionsSuccess,
  addCollectionsFailure,
}

export const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop)
