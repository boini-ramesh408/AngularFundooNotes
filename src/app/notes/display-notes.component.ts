import { Component, OnInit,Input, Output } from '@angular/core';
import { Note_data } from "../model/Note_data";
import { MatDialog, MatSnackBar } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';
import { Router } from '@angular/router';

import { EventEmitter } from 'events';
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit {

  notes:Note_data[];
  @Input() note;
  event = new EventEmitter();
  color:string
  is_archive:false;
  constructor(private http: HttpClient,
    private notesService:NotesServiceService,
    private dialog: MatDialog,private router: Router,
   ) { 

    
  }


  ngOnInit() {
    // this.getRefresh()
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
 

  openDialog(note) {

    console.log("catched note at simple note ", note);
    let dialogRef = this.dialog.open(EditNotesComponent, {
      
      width: "400px",
      height: "auto",

     
      data: { note }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed with out update",result);
    });
  }

getRefresh(){
  this.notesService.getAllNotes().subscribe((response:any)=>{
    console.log("getting")
  })

  
}
 updateColor($event){
    console.log($event,"yhjjghj")
    this.color = $event;
   console.log(this.color,"colr")
   let data={"color":this.color}

   this.notesService.updateNotesWithId(this.note.id,data) 
   .subscribe(response => { 
    // this.getRefresh.emit(re)
    //  this.event.emit(this.getRefresh())
    // this.router.navigate(['/dashboard/notes']);
    // this.event.emit
    
    
     // data.push(response)
   
     console.log(response)
   }
   )
   
  }
  updateArchive($event){
    console.log($event,"yhjjghj")
    this.is_archive = $event;
   console.log(this.is_archive,"arciv")
   let data={"is_archive":this.is_archive}

   this.notesService.updateNotesWithId(this.note.id,data) 
   .subscribe(response => { 
    // this.getRefresh.emit(re)
    //  this.event.emit(this.getRefresh())
    // this.router.navigate(['/dashboard/notes']);
    // this.event.emit
    
    
     // data.push(response)
   
     console.log(response)
   }
   )
  }

}
