import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class StoreService {
url:any="http://localhost:3000/register";
  constructor(private client: HttpClient) {}

  addUser(body: any) {
    return this.client.post(this.url,body);
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
