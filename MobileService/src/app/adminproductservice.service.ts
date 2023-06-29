import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AdminproductserviceService {

constructor(private http:HttpClient) { }
postProduct(data:any){
  return this.http.post<any>("http://localhost:3000/Deals",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
getProduct(){
  return this.http.get<any>("http://localhost:3000/Deals")
  .pipe(map((res:any)=>{
    return res;
  }))
}
updateProduct(data:any,id:number){
  return this.http.put<any>("http://localhost:3000/Deals/"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
deleteProduct(id:number){
  return this.http.delete<any>("http://localhost:3000/Deals/"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}

}
