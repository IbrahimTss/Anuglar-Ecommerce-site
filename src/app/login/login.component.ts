import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { AppService } from '../Services/app.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  public login! : FormGroup 


  constructor(private formBuilder:FormBuilder,private http: HttpClient,private router:Router,private  api :AppService,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.login=this.formBuilder.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]]

    })
  }
  logiin() : void{
    if(this.login.valid){

      this.api.getdata(this.login.value)
      .subscribe ({
        next :(res)=>{
          
          if(res){
            this.login.valid === true
            this.api.showSuccess('','login sucessfully ')

            this.router.navigate(["navbar"])

          }else{
            this.toastr.error('Check Your Password')
            this.login.reset();
          }
        },
        error:()=>{
          this.toastr.error('Somthing went wrong!')
          
        }
        
      })

    }
  }
   
  

  }



