import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../productData.service';

@Component({
  selector: 'app-SelectBrand',
  templateUrl: './SelectBrand.component.html',
  styleUrls: ['./SelectBrand.component.css']
})
export class SelectBrandComponent implements OnInit {
selectbrands:any="";
  constructor(private brandclass:ProductDataService ) {
     this.brandclass.getSelectBrands().subscribe(data => this.selectbrands=data);
   }

  ngOnInit() {
  }

}
