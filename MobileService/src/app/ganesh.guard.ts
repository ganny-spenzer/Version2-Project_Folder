import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceforguardService } from './serviceforguard.service';

@Injectable({
  providedIn: 'root'
})
export class GaneshGuard implements CanActivate {
  constructor(private guardservice:ServiceforguardService,private route: Router) { }

  canActivate() {
 if (sessionStorage.getItem("usersuccess")) {
  return true;
  }
  else{
    window.alert("Please Login");
    this.route.navigate(['login']);
    return false;
  }
}}
