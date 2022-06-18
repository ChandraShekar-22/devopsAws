import { FetchStatus } from 'libs/shared/models';
import { PropertyProps, PropertyErrorType } from './';

export interface PropertyState {
  property: PropertyProps | null;
  fetchStatus: FetchStatus;
  error: PropertyErrorType | null;
}

export const initialState: PropertyState = {
  property: null,
  fetchStatus: FetchStatus.Initial,
  error: null,
};
