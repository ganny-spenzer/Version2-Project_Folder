import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../productData.service';
import { ServiceforguardService } from '../serviceforguard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginItem: any;

  ngOnInit() {
    this.loginenter.getregisterDetails().subscribe((data) => {
      this.loginItem = data;
    });
  }
  hide: boolean = false;

  constructor(private loginenter: ProductDataService, private route: Router,private guardservice:ServiceforguardService) {}
  loginfill(usernames: any, passwords: any) {
    for (let users of this.loginItem) {
      if (usernames == users.emailvalue && passwords == users.passwordvalue) {
        alert('Login Succesful');
        sessionStorage.setItem('usersuccess','true');
this.guardservice.userlogin=true;
        this.route.navigate(['home']);
      }
      // else{
      //   alert("Invalid Login Details");

      // }
    }
    // else(){
    //   passworderror.hide=false;
    // }
  }
}
