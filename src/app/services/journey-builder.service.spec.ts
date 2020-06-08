import { TestBed } from '@angular/core/testing';

import { JourneyBuilderService } from './journey-builder.service';

describe('JourneyBuilderService', () => {
  let service: JourneyBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourneyBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
