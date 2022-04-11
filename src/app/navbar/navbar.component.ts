import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../Services/loader.service';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../Services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router,public loaderService: LoaderService,private  api :AppService,private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  onsubmit(form:NgForm){
    this.router.navigate(['search',form.value.search])
  }

  logOut(){
    if(this.router.navigate!){
      localStorage.removeItem('userData')
      this.router.navigate(['/login'])
      this.api.showSuccess('','logout successfully')
    }
  }

}
