import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from '@redux-saga/core';
import { createReducer } from './reducers';

export function configureAppStore() {
  const reduxSagaMiddleWareOptions = {};
  const sagaMiddleWare = createSagaMiddleware(reduxSagaMiddleWareOptions);
  const { run: runSaga } = sagaMiddleWare;

  const middlewares = [sagaMiddleWare];

  const enhancers = [createInjectorsEnhancer({ createReducer, runSaga })];

  const store = configureStore({ reducer: createReducer(), middleware: [...getDefaultMiddleware(), ...middlewares], enhancers });
  return store;
}
