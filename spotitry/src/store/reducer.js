import { combineReducers } from 'redux';
import User from '../domains/main/redux/Reducers/UserReducer.js'
import Player from '../domains/main/redux/Reducers/PlaybackReducer.js'



// DEVELOPER NOTE: Please keep the reducers in alphabetical order.
export default combineReducers({
    Player,
    User,
});