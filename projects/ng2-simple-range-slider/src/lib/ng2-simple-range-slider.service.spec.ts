import { TestBed } from '@angular/core/testing';

import { NgRangeSliderService } from './ng2-simple-range-slider.service';

describe('NgRangeSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgRangeSliderService = TestBed.get(NgRangeSliderService);
    expect(service).toBeTruthy();
  });
});
