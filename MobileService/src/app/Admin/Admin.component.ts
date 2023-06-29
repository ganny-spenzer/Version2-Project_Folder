import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { UserDetails } from './userDetails';
import { AdminUserserviceService } from '../adminUserservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css']
})
export class AdminComponent implements OnInit {
formValue!:FormGroup
UserData!:any;
showAdd!:boolean;
showUpdate!:boolean;
UserModelObj:UserDetails=new UserDetails()
  constructor(private formbuilder:FormBuilder,private api2:AdminUserserviceService,private route: Router) { }

  ngOnInit() :void{
    this.formValue=this.formbuilder.group({
      namevalue:[''],
      emailvalue:[''],
      mobilevalue:[''],
      passwordvalue:['']
    })
    this.getAllUser()
  }
  clickAddUser(){
      // this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postUserDetails(){
    this.UserModelObj.namevalue=this.formValue.value.namevalue;
    this.UserModelObj.emailvalue=this.formValue.value.emailvalue;
    this.UserModelObj.mobilevalue=this.formValue.value.mobilevalue;
    this.UserModelObj.passwordvalue=this.formValue.value.passwordvalue;

this.api2.postUser(this.UserModelObj)
.subscribe(res=>{
  console.log(res);
  alert("User Added Successfully");
  this.formValue.reset();
  let ref = document.getElementById('cancel')
  ref?.click();
  this.getAllUser();

},ere=>{
  alert("Something went wrong")
})
  }
  getAllUser(){
    this.api2.getUser()
    .subscribe(res=>{
      this.UserData=res;
    })
  }
  deleteUser(row : any){
    this.api2.deleteUser(row.id)
    .subscribe(res=>{
      alert("User Deleted")
      this.getAllUser();
    })
  }
  onEdit(row:any){
    this.showAdd=false;
      this.showUpdate=true;
    this.UserModelObj.id=row.id;
    this.formValue.controls['namevalue'].setValue(row.namevalue);
    this.formValue.controls['emailvalue'].setValue(row.emailvalue);
    this.formValue.controls['mobilevalue'].setValue(row.mobilevalue);
    this.formValue.controls['passwordvalue'].setValue(row.passwordvalue);
    this.formValue.controls['confirmpasswordvalue'].setValue(row.confirmpasswordvalue);

  }
  updateUserDetails(){
    alert("Updated Successfully");
    this.UserModelObj.namevalue=this.formValue.value.namevalue;
    this.UserModelObj.emailvalue=this.formValue.value.emailvalue;
    this.UserModelObj.mobilevalue=this.formValue.value.mobilevalue;
    this.UserModelObj.passwordvalue=this.formValue.value.passwordvalue;

    this.api2.updateUser(this.UserModelObj,this.UserModelObj.id)
    .subscribe(res=>{

      this.formValue.reset();
      let ref = document.getElementById('cancel')
      ref?.click();
      this.getAllUser();
    })

  }
  openProduct(){
    this.route.navigate(['Adminproduct']);


  }

}
