import { combineReducers } from '@reduxjs/toolkit';
import { InjectedReducersType } from './injector-typings';

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  return combineReducers({ ...injectedReducers });
}
