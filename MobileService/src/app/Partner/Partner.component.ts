import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router,Route } from '@angular/router';
import { confirmPasswordValidate } from '../confirmPasswordValidate.validators';
import { StoreService } from '../store.service';
import { ApplictionformService } from '../applictionform.service';

@Component({
  selector: 'app-Partner',
  templateUrl: './Partner.component.html',
  styleUrls: ['./Partner.component.css']
})
export class PartnerComponent  {

  constructor(private fb:FormBuilder,private applicationservice:ApplictionformService,private route:Router) { }
  shopFormComplete=this.fb.group({
    shopnamevalue:[,[Validators.required,Validators.pattern("^(?!.*([a-zA-Z])\\1\\1)[a-zA-Z]+$")]],
    shopownernamevalue:[,[Validators.required,Validators.pattern("^(?!.*([a-zA-Z])\\1\\1)[a-zA-Z]+$")]],
    emailvalue:[,[Validators.required,Validators.pattern("^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$")]],
    shopownermobilevalue: [, [Validators.required, Validators.pattern("^[6-9](?!.*(\\d)\\1{4})\\d{9}$")]],
    shopaddressvalue:[,[Validators.required]],


  },

  );
  submitShopForm() {
   if(this.shopFormComplete.valid){ this.applicationservice.shopApply(this.shopFormComplete.value).subscribe((data) => {
      alert('Form Submitted');
      this.route.navigate(['/home']);
    });
  }
  else{
    alert("Please Fill the Correct Details");
  }}


  }

