import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../productData.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:boolean=false;

  constructor(private loginenter:ProductDataService,private route:Router) { }
  loginfill(usernames:any,passwords:any){
    for(let users of this.loginItem){
      if(usernames == users.EMAIL && passwords == users.PASSWORD){
        this.route.navigate(['home']);
      }
      // else(){
      //   passworderror.hide=false;
      // }
    }


  }
  loginItem:any;

  ngOnInit() {
    this.loginenter.getregisterDetails().subscribe((data) => {
      this.loginItem = data;
    });
  }

}
