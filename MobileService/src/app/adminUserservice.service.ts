import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class AdminUserserviceService {

constructor(private http:HttpClient) { }
postUser(data:any){
  return this.http.post<any>("http://localhost:3000/register",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
getUser(){
  return this.http.get<any>("http://localhost:3000/register")
  .pipe(map((res:any)=>{
    return res;
  }))
}
updateUser(data:any,id:number){
  return this.http.put<any>("http://localhost:3000/register/"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
deleteUser(id:number){
  return this.http.delete<any>("http://localhost:3000/register/"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}
// openProduct(){
//   this.route.navigate(['Adminproduct']);}

}
