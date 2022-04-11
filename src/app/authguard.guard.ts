import { HttpClient } from '@angular/common/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';
import { AppService } from './Services/app.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  [x: string]: any;


  constructor(private http: HttpClient, private router: Router, private authservice: AuthserviceService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let user = localStorage.getItem('userData') ? true : false
    console.log('user', user)
    if (user) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }



  }

 

}


