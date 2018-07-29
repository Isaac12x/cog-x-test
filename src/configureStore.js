import React from 'react';
import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/reducers';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const enhancers = compose(
  window.devToolsExtension && window.devToolsExtension()
)

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
