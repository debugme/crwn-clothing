import { FunctionComponent } from 'react'
import { Directory } from '../../components'

import './Homepage.scss'

export interface HomepageProps {}

export const Homepage: FunctionComponent<HomepageProps> = (): JSX.Element => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}
