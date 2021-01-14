import { FunctionComponent } from 'react'

export interface CardProps {
  title: string
  subtitle: string
}

export const Card: FunctionComponent<CardProps> = (
  props: CardProps
): JSX.Element => {
  const { title, subtitle } = props
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  )
}
