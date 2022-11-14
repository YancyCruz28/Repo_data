import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { SignupComponent } from './routes/signup/signup.component';
import { Page404Component } from './routes/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './routes/admin/admin.component'; //permite consumir apis con el cliente http de angular
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    Page404Component,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //permite consumir apis con el cliente http de angular
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
