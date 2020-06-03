import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Note_data } from '../model/Note_data';

@Component({
  selector: 'app-display-archieve-notes',
  templateUrl: './display-archieve-notes.component.html',
  styleUrls: ['./display-archieve-notes.component.scss']
})
export class DisplayArchieveNotesComponent implements OnInit {
  
  notes:Note_data[];

  expand: any = false
  constructor(private ns:NotesServiceService,private http: HttpClient) { }

  ngOnInit() {
    console.log("insid")
    this.disPlatArchive()
  }
  disPlatArchive(){
    let token = localStorage.getItem('token')

    this.http.get('http://127.0.0.1:8000/api/archieve/', )
    .subscribe((response:any) => { 

      // this.notes=response.data
       // data.push(response)
       this.notes=response.data
      //  console.log(this.notes,"res")
      console.log(response)
     }
     )
  }
  }


