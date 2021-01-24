import { all, call, put, takeLatest } from 'redux-saga/effects'
import { CollectionSansRouteName } from '../../components'
import { buildCollections, firestore } from '../../firebase'
import {
  addCollectionsFailure,
  addCollectionsSuccess,
} from './shopActionCreators'
import { ActionType } from './shopActions'

function* _fetchCollections(/*action: AddCollectionsRequestAction*/) {
  try {
    const collectionsReference = firestore.collection('collections')
    const snapshot = yield collectionsReference.get()
    const list = (snapshot.docs as unknown) as CollectionSansRouteName[]
    const collections = yield call(buildCollections, list)
    yield put(addCollectionsSuccess(collections))
  } catch (error) {
    yield put(addCollectionsFailure(error.message))
  }
}

function* fetchCollections() {
  yield takeLatest(ActionType.FetchCollectionsRequest, _fetchCollections)
}

export function* shopSagas() {
  yield all([call(fetchCollections)])
}
