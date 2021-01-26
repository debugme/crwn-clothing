import { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Collection, CollectionCardContainer, CollectionItem } from '../../components'
import { StyledCategory, StyledItems, StyledTitle } from './Styles'

export interface CategoryProps {
  collection: Collection
}

export interface CategoryAndRouteProps
  extends CategoryProps,
  RouteComponentProps { }

export const Category: FunctionComponent<CategoryAndRouteProps> = (
  props: CategoryAndRouteProps
): JSX.Element => {
  const {
    collection: { title, items },
  } = props
  const build = (item: CollectionItem) => {
    return <CollectionCardContainer key={item.id} item={item} />
  }
  const list = items.map(build)
  return (
    <StyledCategory>
      <StyledTitle>{title}</StyledTitle>
      <StyledItems>{list}</StyledItems>
    </StyledCategory>
  )
}

