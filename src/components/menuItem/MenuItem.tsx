import { FunctionComponent } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import {
  StyledMenuItem,
  StyledBackgroundImage,
  StyledContent,
  StyledTitle,
  StyledSubtitle,
} from './Styles'

export interface MenuItemProps {
  id: number
  title: string
  imageUrl: string
  linkUrl: string
  size?: string
}

export interface MenuItemAndRouteProps
  extends MenuItemProps,
    RouteComponentProps {}

export const _MenuItem: FunctionComponent<MenuItemAndRouteProps> = (
  props: MenuItemAndRouteProps
): JSX.Element => {
  const { title, imageUrl, linkUrl, size, history, match } = props
  const handleClick = () => history.push(`${match.url}${linkUrl}`)

  return (
    <StyledMenuItem onClick={handleClick} size={size}>
      <StyledBackgroundImage imageUrl={imageUrl}>
        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>SHOP NOW</StyledSubtitle>
        </StyledContent>
      </StyledBackgroundImage>
    </StyledMenuItem>
  )
}

export const MenuItem = withRouter(_MenuItem)
