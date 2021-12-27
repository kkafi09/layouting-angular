import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './auth/login/login.component';
import {ForgotpasswordComponent} from './auth/forgotpassword/forgotpassword.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginwidthComponent} from './auth/loginwidth/loginwidth.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegisterComponent,
    LoginwidthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    NgbModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
