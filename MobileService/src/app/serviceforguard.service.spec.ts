/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceforguardService } from './serviceforguard.service';

describe('Service: Serviceforguard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceforguardService]
    });
  });

  it('should ...', inject([ServiceforguardService], (service: ServiceforguardService) => {
    expect(service).toBeTruthy();
  }));
});
