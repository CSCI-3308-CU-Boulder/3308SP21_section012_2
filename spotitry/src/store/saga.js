import { all, call } from 'redux-saga/effects';
import UserSaga from '../domains/main/redux/Sagas/UserSagas.js'
import PlayerSaga from '../domains/main/redux/Sagas/PlaybackSagas'

export default function* rootSaga() {
    yield all([
        call(PlayerSaga),
        call(UserSaga),
    ]);
}
