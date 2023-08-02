import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
brandCount:string=environment.brandCount;
serviceCentreCount:String=environment.serviceCentreCount;
suggestingProductCount:string=environment.suggestingProductCount
}
