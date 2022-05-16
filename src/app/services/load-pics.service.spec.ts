import { TestBed } from '@angular/core/testing';

import { LoadPicsService } from './load-pics.service';

describe('LoadPicsService', () => {
  let service: LoadPicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadPicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
