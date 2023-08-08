import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router,Route } from '@angular/router';
import { confirmPasswordValidate } from '../confirmPasswordValidate.validators';
import { StoreService } from '../store.service';
import { NGXLogger } from 'ngx-logger';
import { logFormat, logUrls } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {




  constructor(private fb:FormBuilder,private dataservice:StoreService,private route:Router,private logger:NGXLogger,private http:HttpClient) { }
  formComplete=this.fb.group({
    namevalue:[,[Validators.required,Validators.pattern("^(?!.*([a-zA-Z])\\1\\1)[a-zA-Z]+$")]],
    emailvalue:[,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@gmail\.com$")]],
    mobilevalue: [, [Validators.required, Validators.pattern("^[6-9](?!.*(\\d)\\1{4})\\d{9}$")]],
    passwordvalue:[,[Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=!_])[A-Za-z0-9@#$%^&+=!_]{8,12}$")]],
    confirmpasswordvalue:[,[Validators.required]]

  },
  {validator:confirmPasswordValidate('passwordvalue','confirmpasswordvalue'),}
  );
  submitForm() {
   if(this.formComplete.valid){ this.dataservice.addUser(this.formComplete.value).subscribe((data) => {
      alert('Form Submitted');
      let logInfo=logFormat;
      logFormat.message=`${JSON.stringify(this.formComplete.value.emailvalue)} was successfully created`;
      this.http.post(logUrls.userCreatedUrl,logInfo).subscribe();
      this.logger.info('User was created successfully');
      this.route.navigate(['/login']);
    });
  }
  else{
    alert("Please Fill the Correct Details");
  }}


  }
