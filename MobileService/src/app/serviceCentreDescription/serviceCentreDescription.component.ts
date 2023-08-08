import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  serviceLinks,
} from 'src/environments/environment.development';

@Component({
  selector: 'app-serviceCentreDescription',
  templateUrl: './serviceCentreDescription.component.html',
  styleUrls: ['./serviceCentreDescription.component.css'],
})
export class ServiceCentreDescriptionComponent implements OnInit {
  id: any;
  finalshopName: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.paramMap?.subscribe((data) => {
      this.id = data.get('id');

      this.http
        .get(`${serviceLinks.getShopDetailsUrl}/${this.id}`)
        .subscribe((data: any) => {
          this.finalshopName = data;
          console.log(this.finalshopName);
        });
    });
  }

  ngOnInit() {}
}
