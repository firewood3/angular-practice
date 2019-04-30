import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OtherComponent } from './components/other/other.component';
import { RgbComponent } from './components/rgb/rgb.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    RgbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
