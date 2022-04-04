import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, FormControl}from '@angular/forms'
import { Router } from '@angular/router';
import { AppService } from '../Services/app.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  public signUp !:FormGroup;
  hero: any;
  
  constructor(private http: HttpClient,private router:Router,private api :AppService,private toastr : ToastrService) { }

  
    // this.signUp= this.formBuilder.group({

    //   fullname:['',Validators.required],
    //   email:['',Validators.required],
    //   password:['',Validators.required],
    //   mobile:['',Validators.required]
    // })
    ngOnInit(): void {
      this.signUp = new FormGroup({
        fullname: new FormControl(this.signUp, [Validators.required]),
        email: new FormControl(this.signUp, [Validators.required,Validators.email]),
        mobile: new FormControl(this.signUp, [Validators.required,Validators.minLength(10)]),
        password: new FormControl(this.signUp, [Validators.required,Validators.minLength(5),Validators.maxLength(8)]),

      })
    
    }

  signnUp(){


if(this.signUp.valid){
  this.api.putdata(this.signUp.value)
  .subscribe ({
    next :(res)=>{
      if(res){
        this.signUp.valid === true
        // alert('Signin Successfully')
        this.api.showSuccess('sucesss','login sucessfully ')
        this.router.navigate(['/login'])
      }
    },
    error:(res)=>{
      // alert("form didn't worked")
      this.toastr.error('Check Your Password')
    }
    
  })

}else{
  alert('enter a valid credentials')
  this.signUp.reset();
}

  }

}
