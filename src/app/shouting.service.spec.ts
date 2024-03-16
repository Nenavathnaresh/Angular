import { TestBed } from '@angular/core/testing';

import { ShoutingService } from './shouting.service';

describe('ShoutingService', () => {
  let service: ShoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
