import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { NotesServiceService } from '../services/notesService/notes-service.service';

@Component({
  selector: 'app-note-setting',
  templateUrl: './note-setting.component.html',
  styleUrls: ['./note-setting.component.css']
})
export class NoteSettingComponent implements OnInit {

  @Output() sendLabels = new EventEmitter(false);
  @Output() sendUpdteLabels = new EventEmitter(false);
  
  constructor(public dialog: MatDialog) { }

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
      this.sendUpdteLabels.emit(result)
      
      console.log('emitting event')
      console.log("More Note Options Dialog Box Closed")
    })
  }

}


@Component({
  selector: "app-note-setting-dialog",
  templateUrl: "note-setting-dialog.component.html",
  styleUrls: ['./note-setting-dialog.component.css']
})

export class NoteSettingDialogComponent implements OnInit{

  showLabelsSignal:Boolean

  allLabels

  listOfLabels = []

  constructor(private dataService : NotesServiceService,
    public dialogRef: MatDialogRef<NoteSettingDialogComponent>){
    this.showLabelsSignal = false
  }

  ngOnInit(){
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
}
