import { FunctionComponent } from 'react'
import { Collection, CollectionPreview } from '..'

import './CollectionOverview.scss'

export interface CollectionOverviewProps {
  collectionList: Collection[]
}

const build = (collection: Collection): JSX.Element => {
  const { id, title, items } = collection
  return <CollectionPreview key={id} title={title} items={items} />
}

export const CollectionOverview: FunctionComponent<CollectionOverviewProps> = (
  props: CollectionOverviewProps
): JSX.Element => {
  const { collectionList = [] } = props
  const list = collectionList.map(build)
  return <div className="collection-overview">{list}</div>
}
