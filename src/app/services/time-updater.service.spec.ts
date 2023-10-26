import { TestBed } from '@angular/core/testing';

import { TimeUpdaterService } from './time-updater.service';

describe('TimeUpdaterService', () => {
  let service: TimeUpdaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeUpdaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
