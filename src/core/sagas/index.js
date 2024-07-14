import { all } from 'redux-saga/effects'

import watcherGetMenu from './getMenuSaga'
import watcherPutRedact from './putRedactSaga'
import watcherPostRedact from './postRedactSaga'
import watcherDeleteRedact from './deleteRedactSaga'

export default function* rootSaga() {
    yield all([
        watcherGetMenu(),
        watcherPutRedact(),
        watcherPostRedact(),
        watcherDeleteRedact()
    ])
}