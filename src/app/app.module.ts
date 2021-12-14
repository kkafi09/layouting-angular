import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PasswordresetComponent } from './auth/passwordreset/passwordreset.component';
import { LoginwidthComponent } from './auth/loginwidth/loginwidth.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordresetComponent,
    LoginwidthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:LocationStrategy, useClass:HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
