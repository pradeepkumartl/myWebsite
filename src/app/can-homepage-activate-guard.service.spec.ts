import { TestBed } from '@angular/core/testing';

import { CanHomepageActivateGuardService } from './can-homepage-activate-guard.service';

describe('CanHomepageActivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanHomepageActivateGuardService = TestBed.get(CanHomepageActivateGuardService);
    expect(service).toBeTruthy();
  });
});
