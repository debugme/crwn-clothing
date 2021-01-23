import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { DirectoryProps } from '../../components'
import { selectSections } from '../../redux/directory/directorySelectors'
import { StoreState } from '../../redux/rootReducer'
import { Home } from './Home'

const mapStateToProps = createStructuredSelector<StoreState, DirectoryProps>({
	sectionList: selectSections,
})

export const HomeContainer = connect(mapStateToProps, null)(Home)