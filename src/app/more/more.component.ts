import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { Note_data } from '../model/Note_data';
import { AddLabelComponent } from '../add-label/add-label.component';


@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
  // notes:Note_data[];
  @Input() notes;

  is_trashed:boolean;
  showLabelsSignal:Boolean

  @Output() sendMoreData = new EventEmitter(false);
  @Output() sendUpdteLabels = new EventEmitter(false);
  @Output() sendDeleteData = new EventEmitter(false);

 
  
  constructor( private _matSnackBar: MatSnackBar,
    private notesService:NotesServiceService ,
    private _matDialog:MatDialog) { }

  ngOnInit() {
  }
  deleteNote(){
    console.log("datatatat")
    console.log("datatatat")
    // const is_trashed: true
    let data={"is_trashed":true}
    this.notesService.updateNotesWithId(this.notes.id,data)
 
    .subscribe((response:any) => { 

      console.log(response,"trash")
      // this.sendDeleteData.emit(this.notes)
      this._matSnackBar.open('Note Trashed ', 'close')
              ._dismissAfter(2500);
      
     
     }
     )
    
    // this.notesService.deleteNoteWithId(this.notes.id)
    // .subscribe((response:any) => { 
    //   this.sendDeleteData.emit(this.notes)
    //   this._matSnackBar.open('Note deleted ', 'close')
    //           ._dismissAfter(2500);
      
    //    // data.push(response)
     
    //    console.log(response)
    //  }
    //  )
  }


  openMore($event){
    console.log($event,"evnt")
    console.log($event)
    let rect = $event.target.getBoundingClientRect()
    console.log(rect)
    let leftX = rect.x + 'px';
    let topY = rect.y + 'px';
    const dialogRef = this._matDialog.open(MoreDialogComponent,{
      // width: "12.5em",
      // height: "10.5em",
      position: {left: leftX, top: topY}
    })

    dialogRef.afterClosed().subscribe(result => {
      
      // this.sendLabels.emit(result)
      this.sendUpdteLabels.emit(result)
      
      console.log('emitting event')
      console.log("More Note Options Dialog Box Closed")
    })
  }

}


@Component({
  selector: "app-more-dialog.component",
  templateUrl:'./more-diaog.component.html',
  // styleUrls: ['./more-dialog.component.scss']
})
export class MoreDialogComponent implements OnInit {
  listOfLabels = []
  allLabels
  showLabelsSignal:Boolean
  constructor(private dataService : NotesServiceService,
    private _matSnackBar: MatSnackBar,
    public dialogRef: MatDialogRef<MoreDialogComponent>){
    this.showLabelsSignal = false
  }


  ngOnInit() {

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
}