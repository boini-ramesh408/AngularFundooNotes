import { Component, OnInit, Output,EventEmitter, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

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
    this.ns.usersList.subscribe(data => {
      this.listOfUsers = data
      })
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
  collab=[]

  collaborators = new FormControl('');
  listOfCollaborators = [];
  addColab=[]
  filteredOptions : Observable<any>;
  owner = localStorage.getItem('email').split(',')
  constructor(private dialog: MatDialog, public dialogRef : MatDialogRef<EditCollaboratorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private Http:HttpClient, private ns : NotesServiceService) {

      this.Http.get("http://127.0.0.1:8000/api/mails/")
      .subscribe(response => {
       this.listOfCollaborators = response['data']
      console.log(this.listOfCollaborators,"mails")
    
      
    })
     }

  ngOnInit() {
    this.filteredOptions = this.collaborators.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
     
    );
  }
  private _filter(value: string): string[] {
    
    const filterValue = value.toLowerCase();

    return this.listOfCollaborators.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  addCollab(collaborators){  

    console.log(collaborators.value,"col")

    this.collab.push(collaborators.value);
   
    
   
        // console.log('Collaborator : ', obj)
        this.addColab.push(collaborators.value);
        console.log('listOf Collaborators: ', this.collab)
     
    
    // collabName.setValue(collabName.username)
    console.log('List Of Collaborators : ', this.listOfCollaborators);
    this.collaborators.setValue('');
  }

  onSave(){
    console.log('Closing Collab Dialog and sending data to main component');
    this.dialogRef.close(this.collab)
  }

  closeDialog() {
    this.dialogRef.close(this.listOfCollaborators);
  }

  deletePerson(email) {
    this.listOfCollaborators.splice( this.listOfCollaborators.indexOf(email), 1 );
  }
}
