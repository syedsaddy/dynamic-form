import { TestBed } from '@angular/core/testing';

import { FormPatchingService } from './form-patching.service';

describe('FormPatchingService', () => {
  let service: FormPatchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPatchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
