import {Action} from '@ngrx/store';

export enum RGBActionType {
  RED = '[RGB] RED',
  GREEN = '[RGB] GREEN',
  BLUE = '[RGB] BLUE'
}

export class Red implements Action {
  readonly type = RGBActionType.RED;
  constructor() {}
}

export class Green implements Action {
  readonly type = RGBActionType.GREEN;
  constructor() {}
}

export class Blue implements Action {
  readonly type = RGBActionType.BLUE;
  constructor() {}
}

export type All =
  | Red
  | Green
  | Blue;
