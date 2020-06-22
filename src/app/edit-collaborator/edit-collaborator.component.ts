import { Component, OnInit, Output,EventEmitter, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-collaborator',
  templateUrl: './edit-collaborator.component.html',
  styleUrls: ['./edit-collaborator.component.scss']
})
export class EditCollaboratorComponent implements OnInit {
  @Output() sendCollaborators = new EventEmitter(false)
  listOfUsers
  constructor(private dialog: MatDialog, private ns : NotesServiceService) { }

  ngOnInit() {
  }

  openCollaboratorDialog(): void{
    const dialogRef = this.dialog.open(EditCollaboratorDialogComponent, {
      width: "40rem",
      // height: "2rem",
      data: this.listOfUsers,
      panelClass: 'dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listOfUsers = result;
      console.log(this.listOfUsers,"list")
      // this.ns.collabSource.next(this.listOfUsers)
      this.sendCollaborators.emit(this.listOfUsers);
      console.log("Collaborators DialogBox Closed!");
    })
  } 
  setCollaborator($event){
    console.log($event,"cols")
  }
}

@Component({
  // selector: "app-more-dialog.component",
  templateUrl:'./edit-collab-dialog.component.html',
  // styleUrls: ['./more-dialog.component.scss']
})
export class EditCollaboratorDialogComponent implements OnInit {
  
  constructor(private dialog: MatDialog, public dialogRef : MatDialogRef<EditCollaboratorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private Http:HttpClient, private ns : NotesServiceService) { }

  ngOnInit() {
  }
}
