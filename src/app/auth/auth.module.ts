import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {LoginwidthComponent} from './loginwidth/loginwidth.component';
import {RegisterComponent} from './register/register.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [LoginComponent, LoginwidthComponent, RegisterComponent, ForgotpasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {
}
