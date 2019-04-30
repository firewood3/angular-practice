import {All, RGBActionType} from './app.actions';
import {initialRGBState, RGBState} from './app.state';
import {createFeatureSelector} from '@ngrx/store';

export function rgbReducer(state = initialRGBState, action: All): RGBState {
  switch (action.type) {
    case RGBActionType.RED: {
      return {
        ...state,
        color: 'Red Color',
        name: 'Red is fire',
        errorMessage: null
      };
    }
    case RGBActionType.GREEN: {
      return {
        ...state,
        color: 'Green Color',
        name: 'Green is tree',
        errorMessage: null
      };
    }
    case RGBActionType.BLUE: {
      return {
        ...state,
        color: 'Blue Color',
        name: 'Blue is water',
        errorMessage: null
      };
    }
    case RGBActionType.BLUE_SUB_1: {
      return {
        ...state,
        color: 'Blue Color',
        name: 'Blue is water',
        errorMessage: null
      };
    }
    default: {
      return state;
    }
  }
}

export const reducers = {
  rgb: rgbReducer
};

export const selectRgbState = createFeatureSelector<RGBState>('rgb');
