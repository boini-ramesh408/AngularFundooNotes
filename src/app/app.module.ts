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
   MatDialogModule,
   MAT_DIALOG_DEFAULT_OPTIONS,
   MatDatepickerModule,
   MatDatepicker,
   MatDatepickerToggle,
   MatNativeDateModule,
   MatSnackBar,
   MatSnackBarModule,
   MatCheckboxModule,
   MatAutocompleteModule,
   MatChipsModule,
   
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
import { RemindMeComponent } from './remind-me/remind-me.component';
import { RemindBoxComponent } from './remind-box/remind-box.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MoreComponent } from './more/more.component';
import { DisplayReminderComponent } from './display-reminder/display-reminder.component';
import { TrashNotesComponent } from './trash-notes/trash-notes.component';
import { LabelComponent } from './label/label.component';
import { LabelDialogComponent } from './label-dialog/label-dialog.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { CollabDialgBoxComponent } from './collab-dialg-box/collab-dialg-box.component';
import { AddLabelComponent } from './add-label/add-label.component';
import { NoteSettingComponent, NoteSettingDialogComponent } from './note-setting/note-setting.component';
import { GridListViewComponent } from './grid-list-view/grid-list-view.component';
import { ProfileUploadComponent } from './profile-upload/profile-upload.component';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';

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
    SearchBarComponent,
    RemindMeComponent,
    RemindBoxComponent,
    MoreComponent,
    DisplayReminderComponent,
    TrashNotesComponent,
    LabelComponent,
    LabelDialogComponent,
    CollaboratorsComponent,
    CollabDialgBoxComponent,
    AddLabelComponent,
    NoteSettingComponent,
    NoteSettingDialogComponent,
    GridListViewComponent,
    ProfileUploadComponent,
    ProfileDialogComponent
    
  ],
  entryComponents: [EditNotesComponent,LabelDialogComponent,CollabDialgBoxComponent,NoteSettingDialogComponent,AddLabelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatSnackBarModule,
    // AmazingTimePickerModule,
  
  
  ],
  providers: [UserServiceService,HttpServicesService,{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
