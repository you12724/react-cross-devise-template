import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';
import axiosSettings from './utils/axiosSettings';
axiosSettings();

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();
const middlewares = [
  sagaMiddleware,
  logger
];

let appliedMiddlewares = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  appliedMiddlewares
);

sagaMiddleware.run(rootSaga);

export default store;
