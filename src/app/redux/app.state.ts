import {createFeatureSelector} from '@ngrx/store/src/selector';

export interface RGBState {
  color: string;
  name: string | null;
  errorMessage: string | null;
}

export const initialRGBState: RGBState = {
  color: 'init red',
  name: null,
  errorMessage: null
};

export const selectRgbState = createFeatureSelector<RGBState>('rgb');
