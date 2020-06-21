import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { DisplayAllNotesComponent } from './display-all-notes/display-all-notes.component';
import { ArchiveNotesComponent } from './archive-notes/archive-notes.component';
import { DisplayArchieveNotesComponent } from './display-archieve-notes/display-archieve-notes.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DisplayReminderComponent } from './display-reminder/display-reminder.component';
import { TrashNotesComponent } from './trash-notes/trash-notes.component';


const routes: Routes = [
  
  { path: '', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'forgot', component: ForgotPasswordComponent},
  { path: 'reset', component: ResetPasswordComponent},
  // { path: 'dashboard', component: DashboardComponent},
  { path: 'add', component: AddNotesComponent},
  {
    path: "dashboard",
    component:DashboardComponent,
    children: [
     
      {
        path: "",
        redirectTo: "/dashboard/notes",
        pathMatch: "full",
        
      },{
        path: "notes",
        component: DisplayAllNotesComponent,
        
      },
      {
        path: "archive",
        component: DisplayArchieveNotesComponent,
        
      },
      {
        path: "search",
        component: SearchBarComponent,
       
      },
      {
        path: "reminders",
        component: DisplayReminderComponent,
       
      },
      {
        path: "trash",
        component: TrashNotesComponent,
       
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
