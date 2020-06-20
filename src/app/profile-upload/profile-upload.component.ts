import { Component, OnInit } from '@angular/core';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NotesServiceService } from '../services/notesService/notes-service.service';

@Component({
  selector: 'app-profile-upload',
  templateUrl: './profile-upload.component.html',
  styleUrls: ['./profile-upload.component.scss']
})
export class ProfileUploadComponent implements OnInit {
  displayPictureUpload = null;
  image = localStorage.getItem('image') 
  email = localStorage.getItem('email').split(',')
  username = localStorage.getItem('name')
  constructor(public dialog: MatDialog,private snackbar: MatSnackBar,private dataService: NotesServiceService) { }

  ngOnInit() {
  }
  getFileButton($event){
    console.log($event,"IMG")

    console.log($event.target.files[0]);
    this.displayPictureUpload = $event.target.files[0];
    this.dataService.uploadProfilePicture(this.displayPictureUpload)
    .subscribe(response => {
      console.log(response["data"],"url")
      localStorage.setItem('image', response['data']);
      if(response['status'] === true){
        this.snackbar.open('SuccessFully Updated Profile Picture','close',{
          duration: 3000,
        })
        // this.dialog.close()
      }else{
        this.snackbar.open('Unable to update profile pciture, Please try again', 'close', {
          duration: 3000
        })
      }
    })
    // var reader = new FileReader()
    // reader.readAsDataURL(this.displayPictureUpload)
    // setTimeout(() =>{
    //   this.imgUrl = reader.result
    //   this.imgUrl = this.domSanitizer.bypassSecurityTrustUrl(this.imgUrl)  
    // }, 100)
  }

  
}
