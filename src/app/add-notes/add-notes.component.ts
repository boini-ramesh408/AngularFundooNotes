import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {


  showCard: boolean;
  

  title:string;
  note:string;
  

  constructor(private http: HttpClient,private notesService:NotesServiceService) {this.showCard = false; }

  ngOnInit() {
  }
  openCard(){
    console.log("data")
    if (this.showCard === false){
      console.log("data1")
      return this.showCard = true
    }
    else{
      return this.showCard = false 
    }
  }
  closeCard(){
    let data= {"title":this.title,"note":this.note}
    console.log(this.title,"titleeeee")
    if (this.showCard === true){
      console.log("data2",data)
      this.notesService.createNotes(data)
      // this.http.post('http://127.0.0.1:8000/api/note/',data)
      .subscribe((response) => { 
        console.log(response,"res")
      }
      )
      
      return this.showCard = false
    }
  }
}
