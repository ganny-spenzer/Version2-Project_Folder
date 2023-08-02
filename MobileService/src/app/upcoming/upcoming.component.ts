import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../productData.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  products:any="";
HomeImages: any;
  constructor(private upcomingService:ProductDataService) {
        this.upcomingService.getProducts().subscribe( data  =>  this.products = data  );

  }



  ngOnInit() {
  }

}
