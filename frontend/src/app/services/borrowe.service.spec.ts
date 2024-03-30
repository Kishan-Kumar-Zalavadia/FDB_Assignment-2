import { TestBed } from '@angular/core/testing';

import { BorroweService } from './borrowe.service';

describe('BorroweService', () => {
  let service: BorroweService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorroweService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
