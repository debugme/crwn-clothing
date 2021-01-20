import { FunctionComponent, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Collection, CollectionPreview } from '../../components'
import { selectCollections } from '../../redux/shop/shopSelectors'
import { StoreState } from '../../redux/rootReducer'

import { data } from './shop.json'

interface ShopProps {
  collectionList: Collection[]
}

const build = (collection: Collection): JSX.Element => {
  const { id, title, items } = collection
  return <CollectionPreview key={id} title={title} items={items} />
}

export const _Shop: FunctionComponent<ShopProps> = (): JSX.Element => {
  const [collectionList] = useState(data)
  const list = collectionList.map(build)
  return <div className="shop">{list}</div>
}

const mapStateToProps = createStructuredSelector<StoreState, ShopProps>({
  collectionList: selectCollections,
})

export const Shop = connect(mapStateToProps, null)(_Shop)
