import { PayloadAction } from '@reduxjs/toolkit';
import { FetchStatus } from 'libs/shared/models';
import { useInjectSaga } from 'redux-injectors';
import { createSlice } from 'store/@reduxjs/toolkit';
import { useInjectReducer } from 'store/redux-injectors';
import { initialState, PropertyState, LoadPropertyArgs, PropertyProps, PropertyErrorType } from '../models';
import { propertyDataFromSaga } from './feature-property.saga';

const slice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    loadPropertyData(state: PropertyState, action: PayloadAction<LoadPropertyArgs>) {
      state.fetchStatus = FetchStatus.Loading;
    },
    loadedPropertyData(state: PropertyState, action: PayloadAction<PropertyProps>) {
      state.property = action.payload;
      state.fetchStatus = FetchStatus.Success;
    },
    propertyDataError(state: PropertyState, action: PayloadAction<PropertyErrorType>) {
      state.error = action.payload;
      state.fetchStatus = FetchStatus.Error;
    },
  },
});
export const { actions: propertyActions, reducer } = slice;

export const usePropertySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: propertyDataFromSaga });
  return { actions: slice.actions };
};
