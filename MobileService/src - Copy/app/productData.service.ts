import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

constructor(private http:HttpClient) { }

getProducts(){
  return this.http.get((environment.getProductUrl));
}
getDeals(){
  return this.http.get('http://localhost:3000/Deals');
}
getFlipkartDeals(){
  return this.http.get(' http://localhost:3000/flipkartdeals');
}
getCromaDeals(){
  return this.http.get(' http://localhost:3000/cromadeals');

}
getSelectBrands(){
  return this.http.get(' http://localhost:3000/SelectBrand');

}
getregisterDetails(){
  return this.http.get(' http://localhost:3000/register');

}
}
