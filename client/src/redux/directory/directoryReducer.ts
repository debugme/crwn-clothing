import { Section } from '../../components'
import { sections } from './data.json'

export interface DirectoryState {
  sectionList: Section[]
}

export const defaultDirectoryState: DirectoryState = {
  sectionList: sections,
}

export const directoryReducer = (
  directoryState = defaultDirectoryState,
  action: any
): DirectoryState => {
  return directoryState
}
