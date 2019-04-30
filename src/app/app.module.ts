import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OtherComponent } from './components/other/other.component';
import { RgbComponent } from './components/rgb/rgb.component';
import {reducers} from './redux/app.reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RgbStateEffects} from './redux/app.effects';
import {RouterModule} from '@angular/router';
import { OtherPageComponent } from './components/other-page/other-page.component';
import {OtherPageGuardService} from './services/other-page-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    RgbComponent,
    OtherPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([RgbStateEffects]),
    RouterModule.forRoot([
      {path: 'other', component: OtherPageComponent, canActivate: [OtherPageGuardService]},
      {path: '', component: RgbComponent},
      {path: '**', redirectTo: '/'},
    ]),
  ],
  providers: [OtherPageGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
