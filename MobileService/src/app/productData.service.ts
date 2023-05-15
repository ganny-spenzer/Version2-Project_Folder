import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

constructor(private http:HttpClient) { }

getProducts(){
  return this.http.get('http://localhost:3000/Products');
}
getDeals(){
  return this.http.get('http://localhost:3000/Deals');
}
getflipkartdeals(){
  return this.http.get(' http://localhost:3000/flipkartdeals');
}
getcromadeals(){
  return this.http.get(' http://localhost:3000/cromadeals');

}
getSelectBrands(){
  return this.http.get(' http://localhost:3000/SelectBrand');

}
getregisterDetails(){
  return this.http.get(' http://localhost:3000/register');

}
getShopDetails(): Observable<any>{
  return this.http.get(' http://localhost:3000/shopDetails')
}
}
