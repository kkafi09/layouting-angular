import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginwidthComponent } from './loginwidth/loginwidth.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'login-default', component:LoginComponent},
  {path:'login-width', component:LoginwidthComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgotpassword', component:PasswordresetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
