import { useInjectReducer as useReducer, useInjectSaga as useSaga } from 'redux-injectors';
import { InjectReducerParams, InjectSagaParams, RootStateKeyType } from './injector-typings';

export function useInjectReducer<key extends RootStateKeyType>(params: InjectReducerParams<key>) {
  return useReducer(params);
}

export function useInjectSaga(params: InjectSagaParams) {
  return useSaga(params);
}
