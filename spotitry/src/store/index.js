import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer.js';
import  sagas  from './saga.js';
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

export const store = createStore(rootReducer, composeWithDevTools(middleware));

sagaMiddleware.run(sagas);


export default store;

