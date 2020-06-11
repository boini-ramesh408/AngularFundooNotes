import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { CollabDialgBoxComponent } from '../collab-dialg-box/collab-dialg-box.component';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {
  listOfUsers

  @Output() sendCollaborators = new EventEmitter(false)
  constructor(private dialog: MatDialog, private ns : NotesServiceService) { }

  ngOnInit() {
    this.ns.usersList.subscribe(data => {
      this.listOfUsers = data
      })
  }
  openCollaboratorDialog(): void{
    const dialogRef = this.dialog.open(CollabDialgBoxComponent, {
      width: "30rem",
      // height: "12rem",
      data: this.listOfUsers,
      panelClass: 'dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listOfUsers = result;
      console.log(this.listOfUsers)
      this.sendCollaborators.emit(this.listOfUsers);
      console.log("Collaborators DialogBox Closed!");
    })
  } 

}
