import { Component, OnInit,Input } from '@angular/core';
import { Note_data } from "../model/Note_data";
import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit {


  @Input() note;
  
  constructor(private http: HttpClient,private notesService:NotesServiceService) { }


  ngOnInit() {
    
    // console.log(this.note,"notes")
   
  }
  deleteNote(){
    console.log(this.note.id)

    // return this.http.delete(`http://localhost:8000/notes/api/`, {headers:{
    //   'token': token

    this.notesService.deleteNoteWithId(this.note.id)
    .subscribe((response:any) => { 

      
       // data.push(response)
     
       console.log(response)
     }
     )
  }

}
