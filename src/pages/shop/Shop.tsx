import { FunctionComponent, useEffect } from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Collection, CollectionOverview } from '../../components'
import { selectCollections } from '../../redux/shop/shopSelectors'
import { StoreState } from '../../redux/rootReducer'

import { Category } from '../category/Category'
import { Collections, ShopState } from '../../redux/shop/shopReducer'

import {
  addCollections,
  AddCollectionsActionCreator,
} from '../../redux/shop/shopActionCreators'

import { firestore } from '../../firebase'

interface ShopProps {
  collections: Collections
  addCollections: AddCollectionsActionCreator
}

interface ShopAndRouteProps extends ShopProps, RouteComponentProps {}

export const _Shop: FunctionComponent<ShopAndRouteProps> = (
  props: ShopAndRouteProps
): JSX.Element => {
  const { match, addCollections } = props

  // TODO Leaky Abstraction (Hide behind a DatabaseService interface instead)
  useEffect(() => {
    const collectionsRef = firestore.collection('collections')
    collectionsRef.onSnapshot(async (snapshot) => {
      const documentSnapshotList = (snapshot.docs as unknown) as Omit<
        Collection,
        'routeName'
      >[]
      const accumulator: ShopState = { collections: {} }
      const buildCollections = (
        accumulator: ShopState,
        snapshot: any
      ): ShopState => {
        const data = snapshot.data()
        const name = encodeURI(data.title.toLowerCase())
        accumulator.collections[name] = { ...data, routeName: name }
        return accumulator
      }
      documentSnapshotList.reduce(buildCollections, accumulator)
      addCollections(accumulator)
    })
  }, [addCollections])

  return (
    <div className="shop">
      <Switch>
        <Route exact path="/shop">
          <CollectionOverview {...props} />
        </Route>
        <Route path={`${match.path}/:collectionId`} component={Category} />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector<
  StoreState,
  Pick<ShopProps, 'collections'>
>({
  collections: selectCollections,
})

const mapDispatchToProps = {
  addCollections,
}

export const Shop = connect(mapStateToProps, mapDispatchToProps)(_Shop)
