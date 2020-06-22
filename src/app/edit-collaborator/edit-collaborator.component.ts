import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NotesServiceService } from '../services/notesService/notes-service.service';

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
    const dialogRef = this.dialog.open(CollabDialgBoxComponent, {
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
