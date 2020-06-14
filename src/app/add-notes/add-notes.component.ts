import { Component, OnInit, EventEmitter,Output, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { Note_data } from '../model/Note_data';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AddLabelComponent } from '../add-label/add-label.component';

// import { AmazingTimePickerService } from "amazing-time-picker";
@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
// @Input() label
 @Output() receiveAddNotes = new EventEmitter(false);

  notes:Note_data;
  showCard: boolean;
  collaborators:[];
  labels:[];
  title:string;
  note:string;
  color:string;
  is_archive:false;
  selectedTime: string;
  today: any;
  reminder:string;
  is_trashed:false;
  // reminder= new FormControl('');

  constructor(private http: HttpClient,private notesService:NotesServiceService,
    private _matSnackBar: MatSnackBar,
    private _matDialog: MatDialog
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
      let reminder  = new Date(this.reminder)
    
    let date =  reminder.getFullYear()+'-'+(reminder.getMonth()+1)+'-'+reminder.getDate();
    
    let time = reminder.getHours()+':'+reminder.getMinutes()+':'+reminder.getSeconds();
    let finalReminder = date + ' ' + time 

    console.log('reminder event recorded  :', finalReminder);
    // this.reminder = finalReminder;
    
    let data= {"title":this.title,"note":this.note,"is_archive":this.is_archive,"color":this.color,
    "reminder":finalReminder,"label":this.labels,"collaborators":this.collaborators}
    console.log(this.color,"titleeeee")
    if (this.showCard === true){
      console.log("data2",data)
   
      this.notesService.createNotes(data)
      
      // this.http.post('http://127.0.0.1:8000/api/note/',data)
      .subscribe((response) => { 
        console.log(response,"res")
        this.receiveAddNotes.emit(data)
        this._matSnackBar.open('Note successfully added', 'close')
              ._dismissAfter(2500);
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
    // console.log($event,"yhjjghj")
    this.color = $event;
  //  console.log(this.color,"colr")
   
  }


  submitData(){
    console.log("reminder")
    // let reminder  = new Date($event)
    // let date =  reminder.getFullYear()+'-'+(reminder.getMonth()+1)+'-'+reminder.getDate();
    // let time = reminder.getHours()+':'+reminder.getMinutes()+':'+reminder.getSeconds();
    // let finalReminder = date + ' ' + time 
    // console.log('reminder event recorded  :', finalReminder);
    // this.reminder = finalReminder;
  }

  // addLabelToNoteDialog(notes) {
  //   console.log(
  //     "fetched Note on add label Click sending the data to add label component : ",
  //     notes
  //   );
  //   const dialogReference = this._matDialog.open(AddLabelComponent, {
  //     width: "280px",
  //     height: "auto",
  //     data: { notes }
  //   });
  //   dialogReference.afterClosed().subscribe(result => {
  //     console.log("dialog closed with out any change");
  //   });
  // }
  setLabels($event){
    // console.log($event,"ent")
    this.labels=$event

  }
  setCollaborator($event){
    console.log($event,"collaborators")
    this.collaborators=$event
  }
}
