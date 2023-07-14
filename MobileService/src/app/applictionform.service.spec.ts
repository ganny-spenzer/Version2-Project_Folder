/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApplictionformService } from './applictionform.service';

describe('Service: Applictionform', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplictionformService]
    });
  });

  it('should ...', inject([ApplictionformService], (service: ApplictionformService) => {
    expect(service).toBeTruthy();
  }));
});
