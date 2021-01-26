import { FunctionComponent } from 'react'
import { CollectionCardContainer, CollectionItem } from '..'
import { StyledCollectionPreview, StyledPreview, StyledTitle } from './Styles'

export interface Collection {
  id: number
  title: string
  routeName: string
  items: CollectionItem[]
}

export type CollectionSansRouteName = Omit<
  Collection,
  'routeName'
>

export interface CollectionPreviewProps {
  title: string
  items: CollectionItem[]
}

export const CollectionPreview: FunctionComponent<CollectionPreviewProps> = (
  props: CollectionPreviewProps
): JSX.Element => {
  const { title, items } = props
  const itemList = items
    .slice(0, 4)
    .map((item) => <CollectionCardContainer key={item.id} item={item} />)

  return (
    <StyledCollectionPreview>
      <StyledTitle>{title}</StyledTitle>
      <StyledPreview>{itemList}</StyledPreview>
    </StyledCollectionPreview>
  )
}
