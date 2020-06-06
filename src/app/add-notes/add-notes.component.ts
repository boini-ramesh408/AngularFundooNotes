import { Component, OnInit, EventEmitter,Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { Note_data } from '../model/Note_data';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

// import { AmazingTimePickerService } from "amazing-time-picker";
@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {

 @Output() receiveAddNotes = new EventEmitter(false);
  notes:Note_data[];
  showCard: boolean;
 

  title:string;
  note:string;
  color:string;
  is_archive:false;
  selectedTime: string;
  today: any;

  constructor(private http: HttpClient,private notesService:NotesServiceService,
  )
  {
    this.showCard = false; 
  }

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
    console.log(this.color,"fhfgh")
    let data= {"title":this.title,"note":this.note,"is_archive":this.is_archive,"color":this.color}
    console.log(this.color,"titleeeee")
    if (this.showCard === true){
      console.log("data2",data)
   
      this.notesService.createNotes(data)
      
      // this.http.post('http://127.0.0.1:8000/api/note/',data)
      .subscribe((response) => { 
        console.log(response,"res")
        this.receiveAddNotes.emit(data)
        // this.receiveAddNotes.emit(response['data'])
      }
      )
      
      
      return this.showCard = false
    }
  }
  setArchive($event){
    console.log($event)
    this.is_archive = $event;
  }

  setColor($event){
    console.log($event,"yhjjghj")
    this.color = $event;
   console.log(this.color,"colr")
   
  }

 
}
