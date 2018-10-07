import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Ng2SimpleRangeSliderModule } from 'ng2-simple-range-slider';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,FormsModule,Ng2SimpleRangeSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
