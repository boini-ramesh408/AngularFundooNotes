import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Note_data } from '../model/Note_data';
import { NotesServiceService } from '../services/notesService/notes-service.service';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.scss']
})
export class EditNotesComponent implements OnInit {
note:Note_data[];

// title:string;
// note:string;
  constructor( public dialogRef: MatDialogRef<EditNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private notesService:NotesServiceService
    ) {this.note = this.data.note; }

  ngOnInit() {
  }
  onSubmit() {
    
    console.log("data recieved  : ",this.note['id']);
    let id=this.note['id']

    // let data={"title":this.note['title'],"note":this.note['note']}
    this.dialogRef.close();
    
    this.notesService.updateNotesWithId(id,this.note).subscribe(
      (response: any) => {
        console.log("response on closing mat dialogue: ", response);
        
        });
   
  }
}
