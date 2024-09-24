import { takeEvery, put, call, select } from 'redux-saga/effects'
import { POST_REDACT, postRedactSuccess } from '../actions/restMenuActions'
import httpProvider from '../../common/httpProvider'
import { putDishes } from '../../common/api'

function* workerLoader() {
    const dishes = yield select(state => state.restMenuReducer.dishes)
    const blockId = yield select(state => state.restMenuReducer.blockId)
    const token = yield select(state => state.restMenuReducer.token)
    try {
        const { data } = yield call(httpProvider.put, putDishes(blockId), {data: dishes})
        
        yield put(postRedactSuccess(data))
      } catch (error) {
        yield put(console.log(error))
      }
  }

export default function* watcherPostRedact() {
  yield takeEvery(POST_REDACT, workerLoader)
}