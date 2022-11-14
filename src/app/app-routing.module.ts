import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './routes/admin/admin.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { Page404Component } from './routes/page404/page404.component';
import { SignupComponent } from './routes/signup/signup.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},

  {path: "home", component: HomeComponent},
  {path: "admin", component: AdminComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},

  {path:"**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
