import { propertyActions as actions } from './feature-property.slice';
import { put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoadPropertyArgs, PropertyProps, ModalDataProps, PropertyErrorType } from '../models';
import data from 'data/projects.json';

export function* getPropertyData(action: PayloadAction<LoadPropertyArgs>) {
  try {
    const propertiesData: ModalDataProps = data.property;
    const slugProperties: PropertyProps[] = propertiesData[action.payload.location as keyof typeof propertiesData] as PropertyProps[];
    const property = slugProperties.filter((property) => {
      if (property.slug === action.payload.slug) return true;

      return false;
    });
    if (property.length > 0) {
      yield put(actions.loadedPropertyData(property[0]));
    } else {
      yield put(actions.propertyDataError(PropertyErrorType.PROPERTY_NOT_FOUND));
    }
  } catch (error) {
    yield put(actions.propertyDataError(PropertyErrorType.PROPERTY_NOT_FOUND));
  }
}

export function* propertyDataFromSaga() {
  yield takeLatest(actions.loadPropertyData.type, getPropertyData);
}
