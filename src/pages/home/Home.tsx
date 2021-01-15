import { FunctionComponent } from 'react'
import { Directory } from '../../components'

import './Home.scss'

export interface HomeProps {}

export const Home: FunctionComponent<HomeProps> = (): JSX.Element => {
  return (
    <div className="home">
      <Directory />
    </div>
  )
}
