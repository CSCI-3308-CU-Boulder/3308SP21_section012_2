import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer.js';
import  sagas  from './saga.js';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

export const store = createStore(rootReducer, composeWithDevTools(middleware));

sagaMiddleware.run(sagas);

// const Store = ({ children }) => {
// 	return <Provider store={store}>{children}</Provider>
// }

// // Store.propTypes = {
// // 	children: PropTypes.node.isRequired,
// // }

// // export { store };

export default store;

