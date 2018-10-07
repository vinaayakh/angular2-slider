import { NgModule } from '@angular/core';
import { Ng2SimpleRangeSliderComponent } from './ng2-simple-range-slider.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,CommonModule
  ],
  declarations: [Ng2SimpleRangeSliderComponent],
  exports: [Ng2SimpleRangeSliderComponent]
})
export class Ng2SimpleRangeSliderModule { }
