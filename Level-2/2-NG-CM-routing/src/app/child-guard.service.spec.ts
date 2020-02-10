import { TestBed } from '@angular/core/testing';

import { ChildGuardService } from './child-guard.service';

describe('ChildGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChildGuardService = TestBed.get(ChildGuardService);
    expect(service).toBeTruthy();
  });
});
