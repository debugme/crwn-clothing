import { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Directory, DirectoryProps, Section } from '../../components'
import { selectSections } from '../../redux/directory/directorySelectors'
import { StoreState } from '../../redux/rootReducer'

import './Home.scss'

export interface HomeProps {
  sectionList: Section[]
}

export const _Home: FunctionComponent<HomeProps> = (
  props: HomeProps
): JSX.Element => {
  const { sectionList } = props
  return (
    <div className="home">
      <Directory sectionList={sectionList} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector<StoreState, DirectoryProps>({
  sectionList: selectSections,
})

export const Home = connect(mapStateToProps, null)(_Home)
