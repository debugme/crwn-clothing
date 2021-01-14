import { FunctionComponent } from 'react'
import { CardProps, Card } from '../components'

import './Homepage.scss'

export interface HomepageProps {}

export const Homepage: FunctionComponent<HomepageProps> = (): JSX.Element => {
  const list: CardProps[] = [
    { title: 'HATS', subtitle: 'SHOP NOW' },
    { title: 'JACKETS', subtitle: 'SHOP NOW' },
    { title: 'SNEAKERS', subtitle: 'SHOP NOW' },
    { title: 'WOMENS', subtitle: 'SHOP NOW' },
    { title: 'MENS', subtitle: 'SHOP NOW' },
  ]
  return (
    <div className="homepage">
      <div className="directory-menu">
        {list.map((item) => (
          <Card key={item.title} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </div>
  )
}
