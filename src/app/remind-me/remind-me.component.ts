import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remind-me',
  templateUrl: './remind-me.component.html',
  styleUrls: ['./remind-me.component.scss']
})
export class RemindMeComponent implements OnInit {

  constructor(  private notesService:NotesServiceService,
    private dialog: MatDialog,private router: Router,) { }

  ngOnInit() {
  }
  openReminderDialog(){
    // console.log("catched note at simple note ", note);
    let dialogRef = this.dialog.open(EditNotesComponent, {
      
      width: "400px",
      height: "auto",

     
      // data: { note }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed with out update",result);
    });
  }
}
