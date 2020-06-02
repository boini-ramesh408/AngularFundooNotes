import { Component, OnInit } from '@angular/core';
import { Note_data } from "../model/Note_data";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-display-all-notes',
  templateUrl: './display-all-notes.component.html',
  styleUrls: ['./display-all-notes.component.scss']
})
export class DisplayAllNotesComponent implements OnInit {
  notes:Note_data[];

  expand: any = false;
    
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("vcres")

    this.http.get('http://127.0.0.1:8000/api/getnote/')
    .subscribe((response:any) => { 

     this.notes=response.data
      // data.push(response)
    
      console.log(this.notes,"res")
    }
    )
  }

}
