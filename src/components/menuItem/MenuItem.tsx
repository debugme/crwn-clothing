import { FunctionComponent } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import './MenuItem.scss'

export interface MenuItemProps {
  id: number
  title: string
  imageUrl: string
  linkUrl: string
  size: string
}

export interface MenuItemAndRouteProps
  extends MenuItemProps,
    RouteComponentProps {}

export const _MenuItem: FunctionComponent<MenuItemAndRouteProps> = (
  props: MenuItemAndRouteProps
): JSX.Element => {
  const { title, imageUrl, linkUrl, size, history, match } = props
  const backgroundImage = `url(${imageUrl})`
  const style = { backgroundImage }
  const handleClick = () => {
    history.push(`${match.url}${linkUrl}`)
  }

  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div className="background-image" style={style}>
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  )
}

export const MenuItem = withRouter(_MenuItem)
