import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../productData.service';

@Component({
  selector: 'app-serviceCentreLists',
  templateUrl: './serviceCentreLists.component.html',
  styleUrls: ['./serviceCentreLists.component.css']
})
export class ServiceCentreListsComponent implements OnInit {
  chennaiAppleList:any;

  constructor(private http:ProductDataService ) {
    this.http.getChennaiApple().subscribe(data=>this. chennaiAppleList=data)
  }

  ngOnInit() {
  }

}
