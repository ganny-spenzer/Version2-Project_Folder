/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductDataService } from './productData.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: ProductData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDataService],
      imports:[HttpClientTestingModule],
    });
  });

  it('should ...', inject([ProductDataService], (service: ProductDataService) => {
    expect(service).toBeTruthy();
  }));
});
