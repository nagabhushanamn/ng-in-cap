import { TestBed } from '@angular/core/testing';

import { StateCheckService } from './state-check.service';

describe('StateCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateCheckService = TestBed.get(StateCheckService);
    expect(service).toBeTruthy();
  });
});
