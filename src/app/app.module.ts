import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule,MatTabsModule,
   MatFormFieldModule,
   MatInputModule, 
   MatButtonModule,
   MatMenuModule,
   MatTooltipModule,
   
   } from '@angular/material';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgClass } from '@angular/common';
import { UserServiceService } from './services/userService/user-service.service';
import { HttpServicesService } from './services/httpServices/http-services.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { DisplayNotesComponent } from './notes/display-notes.component';
import { LogoutComponent } from './logout/logout.component';
import { DisplayAllNotesComponent } from './display-all-notes/display-all-notes.component';
import { ColorComponent } from './color/color.component';
import { ArchiveNotesComponent } from './archive-notes/archive-notes.component';
import { DisplayArchieveNotesComponent } from './display-archieve-notes/display-archieve-notes.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AddNotesComponent,
    DisplayNotesComponent,
    LogoutComponent,
    DisplayAllNotesComponent,
    ColorComponent,
    ArchiveNotesComponent,
    DisplayArchieveNotesComponent,
    EditNotesComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    // MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
  
  ],
  providers: [UserServiceService,HttpServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
