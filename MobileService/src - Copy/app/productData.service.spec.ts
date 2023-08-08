import { TestBed } from '@angular/core/testing';
import { ProductDataService } from './productData.service';
import { HttpClientModule } from '@angular/common/http';


describe('ProductDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        ProductDataService
      ]
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(ProductDataService);
    expect(service).toBeTruthy();
  });
});
