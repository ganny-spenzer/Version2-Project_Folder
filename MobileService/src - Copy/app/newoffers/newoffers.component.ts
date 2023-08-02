import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../productData.service';

@Component({
  selector: 'app-newoffers',
  templateUrl: './newoffers.component.html',
  styleUrls: ['./newoffers.component.css']
})
export class NewoffersComponent  {
  allDeals:any="";
  allflipkartDeals:any="";
  allcromaDeals:any="";

  constructor(private http:ProductDataService) {
    this.http.getDeals().subscribe(data=>this.allDeals=data)
    this.http.getFlipkartDeals().subscribe(data=>this.allflipkartDeals=data)
    this.http.getCromaDeals().subscribe(data=>this.allcromaDeals=data)




   }


}
