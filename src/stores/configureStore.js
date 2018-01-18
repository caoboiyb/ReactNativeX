/* eslint-disable global-require */
/* eslint-disable no-undef */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

let middleware = [thunk];

if (__DEV__) {
  // const reduxImmutableStateInvariant = require('redux-immutable-state-invariant')();
  const logger = createLogger({ collapsed: true });
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(...middleware),
  );
}
