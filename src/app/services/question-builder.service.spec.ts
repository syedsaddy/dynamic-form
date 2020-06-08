import { TestBed } from '@angular/core/testing';

import { QuestionBuilderService } from './question-builder.service';

describe('QuestionBuilderService', () => {
  let service: QuestionBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
