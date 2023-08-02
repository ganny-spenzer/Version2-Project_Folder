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
  popup: boolean = false;


  constructor(private http:ProductDataService) {
    this.http.getDeals().subscribe(data=>this.allDeals=data)
    this.http.getFlipkartDeals().subscribe(data=>this.allflipkartDeals=data)
    this.http.getCromaDeals().subscribe(data=>this.allcromaDeals=data)
    this.time();





   }
   hours: string = '';
   minutes: string = '';
   seconds: string = '';
   months: String = '';
   years: String = '';
   todayDate: string = '';
   ampm: String = '';

   time() {
     setInterval(() => {
       var date = new Date();
       var hour = date.getHours();
       var minute = date.getMinutes();
       var second = date.getSeconds();
       var year = date.getFullYear();
       var today = date.getDate();
       var month = date.getMonth() + 1;
       var AP = '';
       if (hour >= 12) {
         AP = 'pm';
       }
       else {
        AP = 'am';
      }
      if (hour > 12) {
        hour = hour - 12;
      }

      this.hours = '' + hour + '';
      this.minutes = '' + minute + '';
      this.seconds = '' + second + '';
      this.months = '' + month + '';
      this.years = '' + year + '';
      this.ampm = '' + AP + '';
      this.todayDate = '' + today + '';

      this.openPopUp();

    }, 1000);
  }

  openPopUp() {
    if (this.hours == '8' && (this.minutes >= '38' && this.seconds <= '02') && this.years == '2023' && this.months == '8' && this.todayDate == '2') {
      this.popup = true;
    }
    if (this.hours == '8' && this.minutes >= '39' && this.years == '2023' && this.months == '8' && this.todayDate == '2') {
      this.popup = false;
    }
  }
  closePopUp() {
    this.popup = false;
  }



}
