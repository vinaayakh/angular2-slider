import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng2-simple-range-slider',
  template: `
  <div class="container">
  <div class="slider">
    <input #sliderInput value=sliderValue type="range" [min]="sliderMin" [max]="sliderMax" name="rangeSlider" #rangeSlider="ngModel" [(ngModel)]="sliderValue" (input)="detectInputChange($event)"/>
    <div class="slider-fill" [ngStyle]="{width : ((sliderValue-sliderMin)/(sliderMax-sliderMin))*100+'%'}"></div>
    <div class="slider-value" *ngIf="showSliderValue">{{sliderValue}}</div>
  </div>
</div>
  `,
  styleUrls:['./ng2-simple-range-slider.component.scss']
})

export class Ng2SimpleRangeSliderComponent implements OnInit {

  @Input('initialSliderValue') sliderValue = 30;
  @Input('min') sliderMin = 20;
  @Input('max') sliderMax =110;
  @Input('showValue') showSliderValue = false;

  @Output('sliderValue')slider = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  detectInputChange(event){
    this.slider.emit(this.sliderValue);
  }

}
