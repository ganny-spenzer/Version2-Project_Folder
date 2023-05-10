import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router,Route } from '@angular/router';
import { confirmPasswordValidate } from '../confirmPasswordValidate.validators';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  formComplete=new FormGroup({
    namevalue:new FormControl(),
    mobilevalue:new FormControl(),
    emailvalue:new FormControl(),
    passwordvalue:new FormControl(),
    confirmpasswordvalue:new FormControl(),

  });



  constructor(private fb:FormBuilder,private dataservice:StoreService,private route:Router) { }
  formCompletes=this.fb.group({
    namevalue:[,[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
    emailvalue:[,[Validators.required,Validators.pattern("^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$")]],
    mobilevalue:[,[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
    passwordvalue:[,[Validators.required,Validators.pattern("^[A-Z]{1}[a-z]+[@][1-9]{1,7}$")]],
    confirmpasswordvalue:[,[Validators.required]]

  },
  {validator:confirmPasswordValidate('passwordvalue','confirmpasswordvalue'),}
  );
  submitForm() {
    this.dataservice.addUser(this.formCompletes.value).subscribe((data) => {
      alert('Form Submitted');
      this.route.navigate(['/login']);
    });
  }

  }



