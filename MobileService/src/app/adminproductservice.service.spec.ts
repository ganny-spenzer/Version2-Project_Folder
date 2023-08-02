/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminproductserviceService } from './adminproductservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Adminproductservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminproductserviceService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([AdminproductserviceService], (service: AdminproductserviceService) => {
    expect(service).toBeTruthy();
  }));
});
