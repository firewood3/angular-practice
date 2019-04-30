import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {BlueSub1, RGBActionType} from './app.actions';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class RgbStateEffects {

  constructor(private actions: Actions) {}

  @Effect({ dispatch: false })
  red: Observable<any> = this.actions.pipe(
    ofType(RGBActionType.RED),
    tap(value=>console.log('red effects', value))
  );

  @Effect({ dispatch: false })
  greed: Observable<any> = this.actions.pipe(
    ofType(RGBActionType.GREEN),
    tap(value=>console.log('green effects', value))
  );

  @Effect()
  blue: Observable<any> = this.actions.pipe(
    ofType(RGBActionType.BLUE),
    tap(value=>console.log('blue effects', value)),
    map(()=>{
      return new BlueSub1();
    })
  );

  @Effect({ dispatch: false })
  blue_sub_1: Observable<any> = this.actions.pipe(
    ofType(RGBActionType.BLUE_SUB_1),
    tap(value=>console.log('blue_sub_1', value))
  );
}
