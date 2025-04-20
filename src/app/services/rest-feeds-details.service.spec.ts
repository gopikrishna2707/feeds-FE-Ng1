import { TestBed } from '@angular/core/testing';

import { RestFeedsDetailsService } from './rest-feeds-details.service';

describe('RestFeedsDetailsService', () => {
  let service: RestFeedsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestFeedsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
