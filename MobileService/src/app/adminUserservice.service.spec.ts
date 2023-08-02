/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminUserserviceService } from './adminUserservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: AdminUserservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminUserserviceService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([AdminUserserviceService], (service: AdminUserserviceService) => {
    expect(service).toBeTruthy();
  }));
});
