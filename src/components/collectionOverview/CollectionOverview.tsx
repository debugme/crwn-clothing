import { FunctionComponent } from 'react'
import { CollectionPreview } from '..'
import { Collections } from '../../redux/shop/shopReducer'

import './CollectionOverview.scss'

export interface CollectionOverviewProps {
  collections: Collections
}

export const CollectionOverview: FunctionComponent<CollectionOverviewProps> = (
  props: CollectionOverviewProps
): JSX.Element => {
  const { collections } = props
  const build = (value: string): JSX.Element => {
    const { id, title, items } = collections[value]
    return <CollectionPreview key={id} title={title} items={items} />
  }
  const list = Object.keys(collections).map(build)
  return <div className="collection-overview">{list}</div>
}
