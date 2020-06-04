import { Component, OnInit,Input } from '@angular/core';
import { Note_data } from "../model/Note_data";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit {


  @Input() note;
  
  constructor(private http: HttpClient) { }


  ngOnInit() {
    
    // console.log(this.note,"notes")
   
  }
  deleteNote(){
    this.http.delete('http://127.0.0.1:8000/api/note/')
    .subscribe((response:any) => { 

      
       // data.push(response)
     
       console.log("deleted noted")
     }
     )
  }

}
