import { all, takeLatest } from 'redux-saga/effects';
import { STORE_TOKEN } from './actions'
export function* sampleSagaFunctionDeleteLater() {

}

export default function*() {
    yield all([
        yield takeLatest(STORE_TOKEN, sampleSagaFunctionDeleteLater),
    ]);
}