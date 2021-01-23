import { FunctionComponent, useEffect, useState } from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Collection, CollectionOverview, WithSpinner } from '../../components'
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

export const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
export const CategoryWithSpinner = WithSpinner(Category)

export const _Shop: FunctionComponent<ShopAndRouteProps> = (
  props: ShopAndRouteProps
): JSX.Element => {
  const { match, addCollections } = props
  const [isLoading, setIsLoading] = useState(true)

  // TODO Leaky Abstraction (Hide behind a DatabaseService interface instead)
  useEffect(() => {
    const collectionsRef = firestore.collection('collections')
    collectionsRef.onSnapshot(async (snapshot) => {
      setIsLoading(true)
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
      setIsLoading(false)
    })
  }, [addCollections, setIsLoading])

  return (
    <div className="shop">
      <Switch>
        <Route
          exact
          path="/shop"
          render={() => (
            <CollectionOverviewWithSpinner {...props} isLoading={isLoading} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CategoryWithSpinner {...props} isLoading={isLoading} />
          )}
        />
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
