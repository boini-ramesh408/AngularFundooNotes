import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note_data } from '../model/Note_data';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {

  notes:Note_data
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.displayAllTrashNotes()

  }

  displayAllTrashNotes(){
    this.http.get("http://127.0.0.1:8000/api/trashed/")
    .subscribe(response => {
      this.notes=response['data']
     console.log(response,"trash motes")
      
    })
  }




  
}
