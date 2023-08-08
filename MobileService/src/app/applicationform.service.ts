import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serviceLinks } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class ApplictionformService {
  url:any=serviceLinks.shopApplyUrl;
  constructor(private client: HttpClient) {}
  shopApply(data: any) {
    return this.client.post(serviceLinks.shopApplyUrl,data);
  }

}
