import { createSelector } from 'reselect'

import { StoreState } from '../rootReducer'
import { DirectoryState } from './directoryReducer'

export const selectDirectory = (storeState: StoreState) => storeState.directory

export const selectSections = createSelector(
  [selectDirectory],
  (directory: DirectoryState) => directory.sectionList
)
