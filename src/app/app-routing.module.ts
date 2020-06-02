import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNotesComponent } from './add-notes/add-notes.component';


const routes: Routes = [
  
  { path: '', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'forgot', component: ForgotPasswordComponent},
  { path: 'reset', component: ResetPasswordComponent},
  // { path: 'dashboard', component: DashboardComponent},
  { path: 'add', component: AddNotesComponent},
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "/dashboard/notes",
        pathMatch: "full",
        
      },
    ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
