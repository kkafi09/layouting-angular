import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginwidthComponent } from './auth/loginwidth/loginwidth.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login-default', component:LoginComponent},
  {path:'login-width', component:LoginwidthComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgotPass', component:ForgotpasswordComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
