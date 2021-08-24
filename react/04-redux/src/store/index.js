import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createImmutableStateMiddleware from 'redux-immutable-state-invariant';

import rootReducer from '../reducers';

const logger = createLogger({ collapsed: true });

const middleware = [thunk, logger];

if (process.env.NODE_ENV !== 'production') {
  const immutableStateMiddleware = createImmutableStateMiddleware();

  middleware.push(immutableStateMiddleware);
}

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store;
