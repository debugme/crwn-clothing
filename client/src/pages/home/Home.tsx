import { FunctionComponent } from 'react'
import { Directory, Section } from '../../components'
import { HomeDiv } from './Styles'

export interface HomeProps {
  sectionList: Section[]
}

export const Home: FunctionComponent<HomeProps> = (
  props: HomeProps
): JSX.Element => {
  const { sectionList } = props
  return (
    <HomeDiv>
      <Directory sectionList={sectionList} />
    </HomeDiv>
  )
}


