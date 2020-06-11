import { Component, OnInit, Inject } from '@angular/core';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-collab-dialg-box',
  templateUrl: './collab-dialg-box.component.html',
  styleUrls: ['./collab-dialg-box.component.scss']
})
export class CollabDialgBoxComponent implements OnInit {
  listOfUsers
  collaborator_name = new FormControl('');
  listOfCollaborators = [];
  filteredOptions : Observable<any>;

  constructor(private ns : NotesServiceService,
    public dialogRef : MatDialogRef<CollabDialgBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any){
     
    }

  ngOnInit(){
   
  }

  

  

  
}
