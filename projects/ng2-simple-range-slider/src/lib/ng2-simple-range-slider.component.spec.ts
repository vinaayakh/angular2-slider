import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2SimpleRangeSliderComponent } from './ng2-simple-range-slider.component';

describe('Ng2SimpleRangeSliderComponent', () => {
  let component: Ng2SimpleRangeSliderComponent;
  let fixture: ComponentFixture<Ng2SimpleRangeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2SimpleRangeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2SimpleRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
