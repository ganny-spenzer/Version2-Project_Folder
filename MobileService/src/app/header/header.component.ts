import { Component, OnInit } from '@angular/core';
import { ServiceforguardService } from '../serviceforguard.service';
import { ProductDataService } from '../productData.service';
import { Router } from '@angular/router';
import { logFormat, logUrls } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
email:any=sessionStorage.getItem('email');
userloginsuccess=false;
  constructor( public guardservice:ServiceforguardService,private service:ProductDataService,private route:Router,private http:HttpClient,private logger:NGXLogger) {
    this.userloginsuccess=Boolean(sessionStorage.getItem("usersuccess"))||this.guardservice.userlogin
    this.ngOnInit();
   }
registerdetail:any='';
id:any;
emailvalue:any;
emailforLog:any;
  logout(){
    let logInfo=logFormat
    logInfo.message=`${JSON.stringify(this.email)} was succesfully logged out`;
    this.http.post(logUrls.userLoggedOutUrl,logInfo).subscribe();
    this.logger.info('User was logged out');
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
        //  console.log(this.email);
         this.id=i;
        //  console.log(this.id);
      }
     }
     this.emailvalue=this.registerdetail[this.id].emailvalue;    })
  }

}
