import { TestBed } from '@angular/core/testing';

import { CoursesResolverService } from './courses-resolver.service';

describe('CoursesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursesResolverService = TestBed.get(CoursesResolverService);
    expect(service).toBeTruthy();
  });
});
