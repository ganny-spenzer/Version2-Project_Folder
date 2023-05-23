import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../productData.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-serviceCentreDescription',
  templateUrl: './serviceCentreDescription.component.html',
  styleUrls: ['./serviceCentreDescription.component.css']
})
export class ServiceCentreDescriptionComponent implements OnInit {
  id:any;
finalshopName:any;

  constructor(private route:ActivatedRoute,private http:HttpClient){
    this.route.paramMap.subscribe((data)=>{
      this.id = data.get('id');
      this.http.get(` http://localhost:3000/shopDetails/${this.id}`)
.subscribe((data:any)=>{
  this.finalshopName=data
console.log(this.finalshopName)})
    })

  }

  ngOnInit() {
  }

}
