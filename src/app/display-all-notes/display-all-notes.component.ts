import { Component, OnInit } from '@angular/core';
import { Note_data } from "../model/Note_data";
import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
@Component({
  selector: 'app-display-all-notes',
  templateUrl: './display-all-notes.component.html',
  styleUrls: ['./display-all-notes.component.scss']
})
export class DisplayAllNotesComponent implements OnInit {
  notes:Note_data[];


 view

  constructor(private http: HttpClient,private notesService:NotesServiceService) { 
   this.notesService.GridListStatus
    .subscribe(response => {
      console.log(response)
     this.view=response
    });
    
  }


  ngOnInit() {
   
  

    this.displayAllNotes()
    
    // this.http.get('http://127.0.0.1:8000/api/getnote/')
   
  }

  receiveData($event){
    
    console.log("entering data",$event)
    // this.notes=$event
    this.displayAllNotes()

  }

  displayAllNotes(){

    this.notesService.getAllNotes()

    .subscribe((response:any) => { 

      this.notes=response.data

     
       // data.push(response)
     
      //  console.log(this.notes,"res")
     }
     )
  }

}
