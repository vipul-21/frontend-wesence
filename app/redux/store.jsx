import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import Reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
  Reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default Store;
