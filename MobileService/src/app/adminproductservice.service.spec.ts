/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminproductserviceService } from './adminproductservice.service';

describe('Service: Adminproductservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminproductserviceService]
    });
  });

  it('should ...', inject([AdminproductserviceService], (service: AdminproductserviceService) => {
    expect(service).toBeTruthy();
  }));
});
