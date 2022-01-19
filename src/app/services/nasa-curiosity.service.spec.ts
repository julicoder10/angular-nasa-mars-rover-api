import { TestBed } from '@angular/core/testing';

import { NasaCuriosityService } from './nasa-curiosity.service';

describe('NasaCuriosityService', () => {
  let service: NasaCuriosityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaCuriosityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
