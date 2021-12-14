import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { LoginwidthComponent } from './loginwidth/loginwidth.component';


@NgModule({
  declarations: [RegisterComponent, PasswordresetComponent, LoginwidthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
