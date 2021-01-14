import { FunctionComponent } from 'react'
import './MenuItem.scss'

export interface MenuItemProps {
  id: number
  title: string
  imageUrl: string
  linkUrl: string
  size?: string
}

export const MenuItem: FunctionComponent<MenuItemProps> = (
  props: MenuItemProps
): JSX.Element => {
  const { title, imageUrl, size } = props
  const backgroundImage = `url(${imageUrl})`
  const style = { backgroundImage }

  return (
    <div className={`${size} menu-item`}>
      <div className="background-image" style={style}>
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  )
}
