import { Component, OnInit,Input } from '@angular/core';
import { Note_data } from "../model/Note_data";
import { MatDialog, MatSnackBar } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit {


  @Input() note;
  color:string
  constructor(private http: HttpClient,private notesService:NotesServiceService,private dialog: MatDialog) { 

    
  }


  ngOnInit() {
    
    // console.log(this.note,"notes")
   
  }
  deleteNote(){
    console.log(this.note.id)

    // return this.http.delete(`http://localhost:8000/notes/api/`, {headers:{
    //   'token': token

    this.notesService.deleteNoteWithId(this.note.id)
    .subscribe((response:any) => { 
      response.reload();
      
       // data.push(response)
     
       console.log(response)
     }
     )
  }
  // updateNotes(){
   
  //   this.notesService.updateNotesWithId(this.note.id,this.note)
  // }

  setUpdateColor($event){
    console.log($event)
  }

  openDialog(note) {
    console.log("catched note at simple note ", note);
    let dialogRef = this.dialog.open(EditNotesComponent, {
      
      width: "400px",
      height: "auto",

     
      data: { note }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed with out update",result);
    });
  }
}
