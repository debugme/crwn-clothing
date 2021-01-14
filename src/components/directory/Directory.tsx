import { FunctionComponent, useState } from 'react'
import { MenuItemProps, MenuItem } from '..'

import { data } from './sections.json'
import './Directory.scss'

interface DirectoryProps {}

export const Directory: FunctionComponent<DirectoryProps> = (): JSX.Element => {
  const [sections] = useState(data)
  const buildMenuItem = ({ id, ...rest }: MenuItemProps) => {
    return <MenuItem key={id} id={id} {...rest} />
  }
  const menuItemList = sections.map(buildMenuItem)
  const jsxMarkUp = <div className="directory-menu">{menuItemList}</div>
  return jsxMarkUp
}
