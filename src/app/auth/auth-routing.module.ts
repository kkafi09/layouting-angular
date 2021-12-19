import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {LoginComponent} from './login/login.component';
import {LoginwidthComponent} from './loginwidth/loginwidth.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {path: 'login-default', component: LoginComponent},
  {path: 'login-width', component: LoginwidthComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgotPass', component: ForgotpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
