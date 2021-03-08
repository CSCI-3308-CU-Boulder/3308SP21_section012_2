import { all, takeLatest } from 'redux-saga/effects';
import { STORE_TOKEN } from './actions'
export function* sampleSagaFunctionDeleteLater() {
    yield console.log('stuff')
}

export default function* () {
    yield all([
        yield takeLatest(STORE_TOKEN, sampleSagaFunctionDeleteLater),
    ]);
}