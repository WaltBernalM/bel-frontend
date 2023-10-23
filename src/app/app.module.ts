import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignPageComponent } from './pages/sign-page/sign-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignPageComponent,
    SignupFormComponent,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
