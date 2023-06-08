import { Component, OnInit } from '@angular/core';
import { ServiceforguardService } from '../serviceforguard.service';
import { ProductDataService } from '../productData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
email:any=sessionStorage.getItem('email');
userloginsuccess=false;
  constructor( public guardservice:ServiceforguardService,private service:ProductDataService,private route:Router) {
    this.userloginsuccess=Boolean(sessionStorage.getItem("usersuccess"))||this.guardservice.userlogin
    this.ngOnInit();
   }
registerdetail:any='';
id:any;
emailvalue:any;
  logout(){
    this.guardservice.userlogin=false;
    this.userloginsuccess=false;
    sessionStorage.clear();
    this.route.navigate(['home'])
}

  ngOnInit() {
    this.service.getregisterDetails().subscribe((data)=>{
      this.registerdetail=data;

     for(var i=0;i<this.registerdetail.length;i++){
      if(this.email==this.registerdetail[i].email){
         console.log(this.email);
         this.id=i;
         console.log(this.id);
      }
     }
     this.emailvalue=this.registerdetail[this.id].emailvalue;
    })
  }

}
