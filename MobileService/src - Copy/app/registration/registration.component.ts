import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmPasswordValidate } from '../confirmPasswordValidate';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder,private dataservice:StoreService,private route:Router) { }
  formComplete=this.fb.group({
    namevalue:[,[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
    emailvalue:[,[Validators.required,Validators.pattern("^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$")]],
    mobilevalue:[,[Validators.required,Validators.pattern("^[6-9]\d{9}$")]],
    passwordvalue:[,[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
    confirmpasswordvalue:[,[Validators.required]]

  },
  {validator:confirmPasswordValidate('passwordvalue','confirmpasswordvalue'),}
  )

  ngOnInit() {
  }

  submitForm(firstname:any,dateofbirth:any,phonenumber:any,email:any,Fpassword:any,confirmpassword:any) {
    var body = {
      USERNAME: firstname,
      DATEOBIRTH:dateofbirth,
      MOBILENUMBER:phonenumber,
      EMAIL: email,
      PASSWORD: Fpassword,
      CPASSWORD:confirmpassword
    };

    this.dataservice.addUser(body).subscribe((data) => {
      alert('Registered Successfull');
    });

  }

}
