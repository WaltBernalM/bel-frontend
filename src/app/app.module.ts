import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { TasksCardComponent } from './components/tasks-card/tasks-card.component';
import { CountryTimezoneCardComponent } from './components/country-timezone-card/country-timezone-card.component';
import { CountryTimeCardComponent } from './components/country-time-card/country-time-card.component';
import { CountryWeatherCardComponent } from './components/country-weather-card/country-weather-card.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    NavbarComponent,
    SignupFormComponent,
    LoginFormComponent,
    DashboardPageComponent,
    UsersPageComponent,
    CountryListComponent,
    CountryCardComponent,
    TasksCardComponent,
    CountryTimezoneCardComponent,
    CountryTimeCardComponent,
    CountryWeatherCardComponent,
    UsersListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
