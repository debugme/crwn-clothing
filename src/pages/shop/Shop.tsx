import { FunctionComponent, useState } from 'react'
import { CollectionItem, CollectionPreview } from '../../components'

import { data } from './shop.json'

interface ShopProps {}

interface ShopItem {
  id: number
  title: string
  routeName: string
  items: CollectionItem[]
}

const build = (collection: ShopItem): JSX.Element => {
  const { id, title, items } = collection
  return <CollectionPreview key={id} title={title} items={items} />
}

export const Shop: FunctionComponent<ShopProps> = (): JSX.Element => {
  const [collectionList] = useState(data)
  const list = collectionList.map(build)
  return <div className="shop">{list}</div>
}
