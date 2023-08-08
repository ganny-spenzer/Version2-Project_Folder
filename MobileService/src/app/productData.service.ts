import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {serviceLinks } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

constructor(private http:HttpClient) { }

getProducts(){
  return this.http.get(serviceLinks.getProductUrl);
}
getDeals(){
  return this.http.get(serviceLinks.amazonUrl);
}
getFlipkartDeals(){
  return this.http.get(serviceLinks.flipkartUrl);
}
getCromaDeals(){
  return this.http.get(serviceLinks.cromaUrl);

}
getSelectBrands(){
  return this.http.get(serviceLinks.selectBrandUrl);

}
getregisterDetails(){
  return this.http.get(serviceLinks.registerDetailsUrl);

}
getShopDetails(): Observable<any>{
  return this.http.get(serviceLinks.getShopDetailsUrl)
}
}
