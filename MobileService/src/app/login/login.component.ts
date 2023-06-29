import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../productData.service';
import { ServiceforguardService } from '../serviceforguard.service';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { NgIf } from '@angular/common';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // loginForm=new FormGroup({
  // emailvalue:new FormControl(),
  //   passwordvalue:new FormControl()

  // });
  loginItem: any;



  ngOnInit() {

    this.loginenter.getregisterDetails().subscribe((data) => {
      this.loginItem = data;
    });
  }
  hide: boolean = false;
  loginForm=this.fb.group({
    emailvalue:[,[Validators.required]],
    passwordvalue:[,[Validators.required]]
  })

  constructor(private loginenter: ProductDataService, private route: Router,private guardservice:ServiceforguardService,private fb:FormBuilder) {}

  loginfill(usernames: any, passwords: any) {
    for (let users of this.loginItem) {
      if (usernames == users.emailvalue && passwords == users.passwordvalue) {
        alert('Login Succesful');
        sessionStorage.setItem('usersuccess','true');
this.guardservice.userlogin=true;
        this.route.navigate(['home']);

      }

      else{
// alert("login failed");
this.hide=true;
  // return;//exiting the loop
// setTimeout(() => {
//   window.location.reload();
// }, 2000);
      }
    }
    if((usernames=="gannyspenzer007@gmail.com")&&(passwords=="Ganesh@1"))
    {
      this.route.navigate(['Admin']);
    }

  }
  crossMark(){
    this.hide=false;
    this.loginForm.reset();



  }

}

