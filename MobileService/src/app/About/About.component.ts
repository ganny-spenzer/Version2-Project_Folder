import { Component, OnInit } from '@angular/core';
import { countValues } from 'src/environments/environment.development';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
brandCount:string=countValues.brandCount;
serviceCentreCount:String=countValues.serviceCentreCount;
suggestingProductCount:string=countValues.suggestingProductCount;
}
