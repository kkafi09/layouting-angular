import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginwidthComponent } from './auth/loginwidth/loginwidth.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'login-width', component:LoginwidthComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgot', component:ForgotpasswordComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'product', component:ProductComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
