import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './logic/reducers';

const logger = createLogger();
const middlewares = [
  logger
];

let appliedMiddlewares = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  appliedMiddlewares
);

export default store;
