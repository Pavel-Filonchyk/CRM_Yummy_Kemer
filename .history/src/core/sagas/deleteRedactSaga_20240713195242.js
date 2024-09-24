import { takeEvery, put, call, select } from 'redux-saga/effects'
import { DELETE_REDACT, deleteRedactSuccess } from '../actions/restMenuActions'
import httpProvider from '../../common/httpProvider'
import { putDishes } from '../../common/api'

function* workerLoader() {
    const dishes = yield select(state => state.restMenuReducer.dishes)
    const blockId = yield select(state => state.restMenuReducer.blockId)
    
    try {
        const { data } = yield call(httpProvider.put, putDishes(blockId), {data: dishes})
        
        yield put(deleteRedactSuccess(data))
      } catch (error) {
        yield put(console.log(error))
      }
  }

export default function* watcherDeleteRedact() {
  yield takeEvery(DELETE_REDACT, workerLoader)
}