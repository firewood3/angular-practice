import {Action} from '@ngrx/store';

export enum RGBActionType {
  RED = '[RGB] RED',
  GREEN = '[RGB] GREEN',
  BLUE = '[RGB] BLUE',
  BLUE_SUB_1 = '[RGB] BLUE SUB 1',
  BLUE_SUB_2 = '[RGB] BLUE SUB 2'
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

export class BlueSub1 implements Action {
  readonly type = RGBActionType.BLUE_SUB_1;
  constructor() {}
}

export class BlueSub2 implements Action {
  readonly type = RGBActionType.BLUE_SUB_2;
  constructor() {}
}

export type All =
  | Red
  | Green
  | Blue
  | BlueSub1
  | BlueSub2;

