/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminUserserviceService } from './adminUserservice.service';

describe('Service: AdminUserservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminUserserviceService]
    });
  });

  it('should ...', inject([AdminUserserviceService], (service: AdminUserserviceService) => {
    expect(service).toBeTruthy();
  }));
});
