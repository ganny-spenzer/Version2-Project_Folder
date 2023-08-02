import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../productData.service';
import { SharedServiceService } from '../SharedService.service';

@Component({
  selector: 'app-serviceCentreLists',
  templateUrl: './serviceCentreLists.component.html',
  styleUrls: ['./serviceCentreLists.component.css'],
})
export class ServiceCentreListsComponent implements OnInit {
  selectedCity: string | undefined;
  selectedBrand: string | undefined;

  productList: any;

  constructor(
    private http: ProductDataService,
    private sharedServices: SharedServiceService
  ) {}

  ngOnInit() {
    this.selectedCity = this.sharedServices.selectedCity;
    this.selectedBrand = this.sharedServices.selectedBrand;

    this.http.getShopDetails().subscribe((data) => {
      this.productList = data.filter(
        (x: any) =>
          x.shoplocation === this.selectedCity &&
          x.brandname === this.selectedBrand
      );
    });
  }
}
