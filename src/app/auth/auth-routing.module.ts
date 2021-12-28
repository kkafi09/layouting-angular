import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {LoginComponent} from './login/login.component';
import {LoginwidthComponent} from './loginwidth/loginwidth.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'auth',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: LoginwidthComponent,
    children: [
      {
        path: 'login-width',
        component: LoginwidthComponent
      }
    ]
  },
  {
    path: '',
    component: RegisterComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: '',
    component: ForgotpasswordComponent,
    children: [
      {
        path: 'forgot',
        component: ForgotpasswordComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
