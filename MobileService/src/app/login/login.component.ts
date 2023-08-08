import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../productData.service';
import { ServiceforguardService } from '../serviceforguard.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import {  logFormat, logUrls } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginItem: any;


  ngOnInit() {
    this.loginEnter.getregisterDetails().subscribe((data) => {
      this.loginItem = data;
    });

  }
  hide: boolean = false;
  loginForm = this.fb.group({
    emailvalue: [, [Validators.required]],
    passwordvalue: [, [Validators.required]],
  });

  constructor(
    private loginEnter: ProductDataService,
    private route: Router,
    private guardservice: ServiceforguardService,
    private fb: FormBuilder,
    private logger: NGXLogger,private http:HttpClient
    ) {}

  loginFill(userName: any, password: any) {
    for (let users of this.loginItem) {
      if (userName == users.emailvalue && password == users.passwordvalue) {
        alert('Login Successfull');
        this.logger.info('User was logged in');
        let logInfo=logFormat;
        logInfo.message=`${JSON.stringify(userName)} was succesfully logged in`;
        this.http.post(logUrls.userLoggedInUrl,logInfo).subscribe();
        sessionStorage.setItem('usersuccess', 'true');
        this.guardservice.userlogin = true;
        this.route.navigate(['home']);
      } else {
        this.hide = true;


      }
    }
    if (userName == 'gannyspenzer007@gmail.com' && password == 'Ganesh@1') {
      this.route.navigate(['Admin']);
    }
  }
  crossMark() {
    this.hide = false;
    this.loginForm.reset();
  }
}
