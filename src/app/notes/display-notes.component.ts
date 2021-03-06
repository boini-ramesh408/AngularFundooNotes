import { Component, OnInit,Input, Output, DoCheck } from '@angular/core';
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

export class DisplayNotesComponent implements OnInit, DoCheck{


  chooseView:boolean
  notes:Note_data[];
  @Input() note;
  showIcons=false
  color:string
  reminder:string;
  showCard: boolean;
  labelData=[]
  is_archive:false;
  expand: any = false;



  constructor(private http: HttpClient,
    private notesService:NotesServiceService,
    private dialog: MatDialog,private router: Router,
    private _matSnackBar: MatSnackBar,
   ) { 

  this.showCard=false
    
  }
  viewListGrid: boolean;

  ngDoCheck() {
    this.viewListGrid = this.notesService.gridListView;
    // console.log( this.notesService.gridListView,"status1")
  }

  ngOnInit() {


    console.log(this.reminder)
    this.displayAllNotes()


   
  }
  getButton(){
    if(this.showIcons === false){
      return this.showIcons = true
    }
  }

  removeButton(){
    if(this.showIcons === true){
      return this.showIcons = false
    }
  }
 

  // deleteNote($event){
  //   // console.log($event,"event")
  //   this.displayAllNotes()
  // }


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

// getRefresh(){
//   this.notesService.getAllNotes().subscribe((response:any)=>{
//     console.log("getting")
//   })

  
// }

setLabels($event){
  console.log($event,"labelss")
  this.note.label=$event
}
 updateColor($event){
  // this.displayAllNotes()
    console.log($event,"yhjjghj")
    this.color = $event;
    this.note.color=this.color
  //  console.log(this.color,"colr")
   let data={"color":this.color}
  //  console.log(this.note.id,"notes")

   this.notesService.updateNotesWithId(this.note.id,data)

   .subscribe(response => { 
     this.displayAllNotes()
    // this.getRefresh.emit(re)
    //  this.event.emit(this.getRefresh())
    // this.router.navigate(['/dashboard/notes']);
    // this.event.emit
    this._matSnackBar.open('color updated', 'close')
    ._dismissAfter(2500);
    
     // data.push(response)
   
    //  console.log(response)
   }
   )
   
  }
  updateArchive($event){
    // this.displayAllNotes()
    // console.log($event,"yhjjghj")
    this.is_archive = $event;
  //  console.log(this.is_archive,"arciv")
   let data={"is_archive":this.is_archive}

   this.notesService.updateNotesWithId(this.note.id,data) 
   .subscribe(response => { 
    this.displayAllNotes()
    // this.getRefresh.emit(re)
    //  this.event.emit(this.getRefresh())
    // this.router.navigate(['/dashboard/notes']);
    // this.event.emit
    
    this._matSnackBar.open('Archieve notes updated', 'close')
    ._dismissAfter(2500);
     // data.push(response)
   
    //  console.log(response)
   }
   )
  }
  displayAllNotes(){
    this.notesService.getAllNotes()
    .subscribe((response:any) => { 

      this.notes=response.data
      // console.log(response,"all Notes")
     
       // data.push(response)
     
      //  console.log(this.notes,"res")

     }
     )
  }

  setCollaborator($event){
    
    // console.log('Collab Event : ',$event)
    let data = $event
  
   
    // console.log('ids : ', this.note.id)
    // let data = {'id': this.data.id, 'collaborators': collabIds};
    this.notesService.updateNotesWithId(this.note.id,data).subscribe(response => {
    //  console.log(response)
    })
  }

  submitData(){
  console.log(this.reminder)
    let reminder  = new Date(this.reminder)
   

  let date =  reminder.getFullYear()+'-'+(reminder.getMonth()+1)+'-'+reminder.getDate();
  
  let time = reminder.getHours()+':'+reminder.getMinutes()+':'+reminder.getSeconds();
  let finalReminder = date + ' ' + time 

  console.log('reminder event recorded  :', finalReminder);
  // this.reminder = finalReminder;
  
  let data= {"reminder":finalReminder}
  
  if (this.showCard === true){
    console.log("data2",data)
 
    this.notesService.updateNotesWithId(this.note.id,data)
    
    // this.http.post('http://127.0.0.1:8000/api/note/',data)
    .subscribe((response) => { 
      console.log(response,"res")
      // this.receiveAddNotes.emit(data)
      this._matSnackBar.open('Note successfully added', 'close')
            ._dismissAfter(2500);
      // this.receiveAddNotes.emit(response['data'])
    }
    )
    
    
    return this.showCard = false
  }
  }
  onSave(){
    console.log(this.reminder)
    let reminder  = new Date(this.reminder)
   

  let date =  reminder.getFullYear()+'-'+(reminder.getMonth()+1)+'-'+reminder.getDate();
  
  let time = reminder.getHours()+':'+reminder.getMinutes()+':'+reminder.getSeconds();
  let finalReminder = date + ' ' + time 

  console.log('reminder event recorded  :', finalReminder);
  // this.reminder = finalReminder;
  
  let data= {"reminder":finalReminder}
  
 
    console.log("data2",data)
 
    this.notesService.updateNotesWithId(this.note.id,data)
    
   
    .subscribe((response) => { 
      // console.log(response,"res")
   
      this._matSnackBar.open('Reminder successfully added', 'close')
            ._dismissAfter(2500);
     
    }
    )
    
    
    
  }
   
  
}
