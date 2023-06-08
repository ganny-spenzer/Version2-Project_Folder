import { TestBed } from '@angular/core/testing';

import { GaneshGuard } from './ganesh.guard';

describe('GaneshGuard', () => {
  let guard: GaneshGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GaneshGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
