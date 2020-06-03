import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-display-archieve-notes',
  templateUrl: './display-archieve-notes.component.html',
  styleUrls: ['./display-archieve-notes.component.scss']
})
export class DisplayArchieveNotesComponent implements OnInit {

  constructor(private ns:NotesServiceService,private http: HttpClient) { }

  ngOnInit() {
    console.log("insid")
    this.disPlatArchive()
  }
  disPlatArchive(){
    let token = localStorage.getItem('token')

    this.http.get('http://127.0.0.1:8000/api/archieve/', {headers : {
      'token': token,
    }})
    .subscribe((response:any) => { 

      // this.notes=response.data
       // data.push(response)
     
      //  console.log(this.notes,"res")
      console.log("archieve")
     }
     )
  }
  }


