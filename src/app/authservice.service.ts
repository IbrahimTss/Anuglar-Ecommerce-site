import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { AppService } from './Services/app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
constructor(private http: HttpClient){}
  
 
  isLoggedIn(){
    return this.http.get<any>("http://192.168.0.121:8000/signup")
  }
}
