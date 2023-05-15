import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../productData.service';
import { SharedServiceService } from '../SharedService.service';


@Component({
  selector: 'app-SelectBrand',
  templateUrl: './SelectBrand.component.html',
  styleUrls: ['./SelectBrand.component.css']
})
export class SelectBrandComponent implements OnInit {
  selectedBrand: string | undefined;
  selectBrand(brand: string) {
    this.sharedService.selectedBrand = brand;
  }
// selectbrands:any="";
  constructor(private brandclass:ProductDataService, private sharedService: SharedServiceService ) {
    //  this.brandclass.getSelectBrands().subscribe(data => this.selectbrands=data);
   }

  ngOnInit() {
  }

}
