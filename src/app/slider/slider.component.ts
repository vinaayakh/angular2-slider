import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

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
