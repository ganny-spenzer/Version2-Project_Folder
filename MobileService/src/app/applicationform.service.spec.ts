/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApplictionformService } from './applicationform.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


describe('Service: Applictionform', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplictionformService],
      imports: [HttpClientTestingModule,HttpClientModule],
    });
  });

  it('should ...', inject([ApplictionformService], (service: ApplictionformService) => {
    expect(service).toBeTruthy();
  }));
});
