import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serviceLinks } from 'src/environments/environment.development';

@Injectable({
  providedIn:'root'
})
export class StoreService {
url:any=serviceLinks.registerUrl;
  constructor(private client: HttpClient) {}

  addUser(data: any) {
    return this.client.post(serviceLinks.registerUrl,data);
  }
 retrieveUser(){
 return this.client.get(this.url);
}

 deleteUser(id:any)
 {
  return this.client.delete(this.url,id)
 }
 updateUser(id:any,data:any)
 {
  return
 }
}
