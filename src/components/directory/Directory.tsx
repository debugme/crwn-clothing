import { FunctionComponent } from 'react'

import { MenuItemProps, MenuItem } from '..'

import './Directory.scss'

export interface Section {
  title: string
  imageUrl: string
  size: string
  id: number
  linkUrl: string
}

export interface DirectoryProps {
  sectionList: Section[]
}

export const Directory: FunctionComponent<DirectoryProps> = (
  props: DirectoryProps
): JSX.Element => {
  const { sectionList } = props
  const buildMenuItem = ({ id, ...rest }: MenuItemProps) => {
    return <MenuItem key={id} id={id} {...rest} />
  }
  const menuItemList = sectionList.map(buildMenuItem)
  const jsxMarkUp = <div className="directory-menu">{menuItemList}</div>
  return jsxMarkUp
}
