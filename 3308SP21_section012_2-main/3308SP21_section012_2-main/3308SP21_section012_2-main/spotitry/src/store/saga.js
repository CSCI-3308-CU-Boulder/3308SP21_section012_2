import { all, call } from 'redux-saga/effects';
import UserSaga from '../domains/main/redux/sagas.js'

export default function* rootSaga() {
    yield all([
        call(UserSaga)
    ]);
}
