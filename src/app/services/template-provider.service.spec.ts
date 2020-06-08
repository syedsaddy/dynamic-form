import { TestBed } from '@angular/core/testing';

import { TemplateProviderService } from './template-provider.service';

describe('TemplateProviderService', () => {
  let service: TemplateProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
