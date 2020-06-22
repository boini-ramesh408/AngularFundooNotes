import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { NotesServiceService } from '../services/notesService/notes-service.service';
import { MatSnackBar } from '@angular/material';
import { Note_data } from '../model/Note_data';

@Component({
  selector: 'app-note-setting',
  templateUrl: './note-setting.component.html',
  styleUrls: ['./note-setting.component.scss']
})
export class NoteSettingComponent implements OnInit {
  @Input() notes;

  @Output() sendLabels = new EventEmitter(false);
  @Output() sendUpdteLabels = new EventEmitter(false);
  
  constructor(public dialog: MatDialog,private dataService : NotesServiceService) { 

    this.dataService.noteDeleteDataSource.next(this.notes)
  }

  ngOnInit(): void {
  }
  
  openMore($event){
    console.log($event,"evnt")
    console.log($event)
    let rect = $event.target.getBoundingClientRect()
    console.log(rect)
    let leftX = rect.x + 'px';
    let topY = rect.y + 'px';
    const dialogRef = this.dialog.open(NoteSettingDialogComponent,{
      // width: "12.5em",
      // height: "10.5em",
      position: {left: leftX, top: topY}
    })

    dialogRef.afterClosed().subscribe(result => {
      
      this.sendLabels.emit(result)
      
      
      console.log('emitting event')
      console.log("More Note Options Dialog Box Closed")
    })
  }

}


@Component({
  selector: "app-note-setting-dialog",
  templateUrl: "note-setting-dialog.component.html",
  styleUrls: ['./note-setting-dialog.component.scss']
})

export class NoteSettingDialogComponent implements OnInit{
  
  showLabelsSignal:Boolean
  // @Output() sendDeleteData = new EventEmitter(false);
  allLabels
  notes
  listOfLabels = []
  is_trashed:boolean
  constructor(private dataService : NotesServiceService,
    private _matSnackBar: MatSnackBar,
    public dialogRef: MatDialogRef<NoteSettingDialogComponent>){
    this.showLabelsSignal = false
  }

  ngOnInit(){

this.dataService.noteDeleteStatus.subscribe(result=>{

    this.notes=result
})

    this.dataService.labelData.subscribe(result => {
    
      this.allLabels = result;
    })
  }

  showLabels(){
    if (this.showLabelsSignal === false){
      this.showLabelsSignal = true;
    }
  }

  toggle($event){
    console.log($event,"toggle")
    // console.log($event.source.value['name'],"toggle");
    if ($event.source.checked ===true){
      console.log($event.source.value['name'],"toggle");
      this.listOfLabels.push($event.source.value['name'])
      this.dataService.NoteLabelSource.next($event.source.value['id']

      )
    }
  }

  submitLabels(){
    this.dialogRef.close(this.listOfLabels)
  }

  onClose(){
    this.dialogRef.close();
  }
  addLabelToNoteDialog(label){
    console.log(label['name'],"label")
    // let ln=
    // for (var labelDta in label) {
      
    // }
      
  }

  deleteNote(){
    console.log("datatatat")
    // const is_trashed: true
    let data={"is_trashed":true}
    this.dataService.updateNotesWithId(this.notes.id,data)
  
    // this.dataService.deleteNoteWithId(this.notes.id)
    .subscribe((response:any) => { 

      console.log(response,"trash")
      // this.sendDeleteData.emit(this.notes)
      this._matSnackBar.open('Note Trashed ', 'close')
              ._dismissAfter(2500);
      
       // data.push(response)
     
      //  console.log(response)
     }
     )
  }
}
