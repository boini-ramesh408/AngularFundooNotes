import { Component, OnInit, Inject } from '@angular/core';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-collab-dialg-box',
  templateUrl: './collab-dialg-box.component.html',
  styleUrls: ['./collab-dialg-box.component.scss']
})
export class CollabDialgBoxComponent implements OnInit {
  listOfUsers
 
  collaborators = new FormControl('');
  listOfCollaborators = [];
  filteredOptions : Observable<any>;
  owner = localStorage.getItem('email').split(',')
  constructor(private ns : NotesServiceService,
    public dialogRef : MatDialogRef<CollabDialgBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private Http:HttpClient
    ){
      this.Http.get("http://127.0.0.1:8000/api/mails/")
      .subscribe(response => {
       this.listOfCollaborators = response['data']
      console.log(this.listOfCollaborators,"mails")
    
      
    })
    }

  ngOnInit(){
    this.filteredOptions = this.collaborators.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    
    const filterValue = value.toLowerCase();

    return this.listOfCollaborators.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  
  onSave(){
    console.log('Closing Collab Dialog and sending data to main component');
    this.dialogRef.close(this.listOfCollaborators)
  }

  

  
}
