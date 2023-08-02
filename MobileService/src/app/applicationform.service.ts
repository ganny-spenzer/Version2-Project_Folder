import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApplictionformService {
  url:any="http://localhost:3000/shopapply";
  constructor(private client: HttpClient) {}
  shopApply(data: any) {
    return this.client.post("http://localhost:3000/shopapply",data);
  }

}
