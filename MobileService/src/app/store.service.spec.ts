/* tslint:disable:no-unused-variable */
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { StoreService } from './store.service';

describe('Service: Store', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [StoreService,HttpClient]
    }).compileComponents();
  });

  it('should ...', inject([StoreService], (service: StoreService) => {
    expect(service).toBeTruthy();
  }));
});
