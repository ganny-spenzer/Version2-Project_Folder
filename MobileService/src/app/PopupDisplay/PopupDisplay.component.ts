import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../SharedService.service';
@Component({
  selector: 'app-PopupDisplay',
  templateUrl: './PopupDisplay.component.html',
  styleUrls: ['./PopupDisplay.component.css']
})
export class PopupDisplayComponent implements OnInit {
  selectedCity: string | undefined;
  selectCity(city: string) {
    this.sharedService.selectedCity = city;
  }

  constructor(private sharedService: SharedServiceService) {

  }

  ngOnInit() {
  }
show=true;
close(){
  this.show=false;
}
}
