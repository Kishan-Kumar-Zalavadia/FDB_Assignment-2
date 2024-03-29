import { TestBed } from '@angular/core/testing';

import { AddBorrowerService } from './add-borrower.service';

describe('AddBorrowerService', () => {
  let service: AddBorrowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBorrowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
