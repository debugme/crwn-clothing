import { FunctionComponent, useEffect } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import { CategoryContainer } from '..'
import { Collection, CollectionOverviewContainer } from '../../components'
import { firestore } from '../../firebase'
import {
  AddCollectionsFailureActionCreator,
  AddCollectionsRequestActionCreator,

  AddCollectionsSuccessActionCreator
} from '../../redux/shop/shopActionCreators'
import { Collections } from '../../redux/shop/shopReducer'
export interface ShopProps {
  collections: Collections
  isCollectionsLoaded: boolean
  isRequesting: boolean
  addCollectionsRequest: AddCollectionsRequestActionCreator
  addCollectionsSuccess: AddCollectionsSuccessActionCreator
  addCollectionsFailure: AddCollectionsFailureActionCreator
}

export interface ShopAndRouteProps extends ShopProps, RouteComponentProps { }

export const Shop: FunctionComponent<ShopAndRouteProps> = (
  props: ShopAndRouteProps
): JSX.Element => {
  const {
    match,
    addCollectionsRequest,
    addCollectionsSuccess,
    addCollectionsFailure,
    isRequesting,
    isCollectionsLoaded,
  } = props

  useEffect(() => {
    // -----------------------------------------------------------------------------
    // TODO Leaky Abstraction (Hide behind a DatabaseService interface instead)
    // -----------------------------------------------------------------------------
    addCollectionsRequest()
    const collectionsRef = firestore.collection('collections')
    collectionsRef
      .get()
      .then(async (snapshot) => {
        try {
          // -----------------------------------------------------------------------------
          // TODO
          // This block of code should exist inside a redux think or a redux saga instead
          // of being here.
          const documentSnapshotList = (snapshot.docs as unknown) as Omit<
            Collection,
            'routeName'
          >[]
          const collections: Collections = {}
          const buildCollections = (
            collections: Collections,
            snapshot: any
          ): Collections => {
            const data = snapshot.data()
            const name = encodeURI(data.title.toLowerCase())
            collections[name] = { ...data, routeName: name }
            return collections
          }
          documentSnapshotList.reduce(buildCollections, collections)
          // -----------------------------------------------------------------------------
          addCollectionsSuccess(collections)
        } catch (error) {
          addCollectionsFailure(error.getMessage())
        }
      })
      .catch((error) => addCollectionsFailure(error.getMessage()))
  }, [addCollectionsRequest, addCollectionsSuccess, addCollectionsFailure])
  return (
    <div className="shop">
      <Switch>
        <Route
          exact
          path="/shop"
          render={() => (
            <CollectionOverviewContainer
              {...props}
              isLoading={isRequesting}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CategoryContainer {...props} isLoading={!isCollectionsLoaded} />
          )}
        />
      </Switch>
    </div>
  )
}

