import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path:'', redirectTo:'login',pathMatch:'full'},

  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'navbar',canActivate:[AuthguardGuard],component:NavbarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
