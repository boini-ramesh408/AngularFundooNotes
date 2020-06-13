import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Label } from '../model/label';
import { Note_data } from '../model/Note_data';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrls: ['./add-label.component.scss']
})
export class AddLabelComponent implements OnInit {

  fetchedNote: Note_data;
  label: Label;
  labelsList: Label[];
  
  constructor(public dialogRef : MatDialogRef<AddLabelComponent>,
    private ns:NotesServiceService,
    private http:HttpClient,
     @Inject(MAT_DIALOG_DATA) public data) { this.fetchedNote = this.data.notes;
      this.ns.autoRefesh.subscribe(() => {
        this.displayAllLabels();
      });}
   
  ngOnInit() {
    this.displayAllLabels()
  }

  displayAllLabels() {
    this.http.get("http://127.0.0.1:8000/api/label/")
    .subscribe(response => {
      let label = response['data']
      
      this.labelsList = label

      
    })
    
  }
  done() {
    console.log("dialog ref is closed .");
    this.dialogRef.close();
  }
  
  addNoteToLabel(label)
  {
    console.log(label,"laabel add")
    // this.labelsList = label
  }
}
