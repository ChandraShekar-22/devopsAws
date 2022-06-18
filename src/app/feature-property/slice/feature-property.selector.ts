import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'root-state';
import { initialState } from '../models';

const selectDomain = (state: RootState) => state?.property || initialState;

export const selectProperty = createSelector([selectDomain], (property) => property.property);

export const selectFetchStatus = createSelector([selectDomain], (property) => property.fetchStatus);

export const selectError = createSelector([selectDomain], (property) => property.error);
