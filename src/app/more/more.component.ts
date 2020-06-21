import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
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


  addLabelToNoteDialog(notes) {
    console.log("fetched Note on add label Click sending the data to add label component : ",notes);
    const dialogReference = this._matDialog.open(AddLabelComponent, {
      width: "280px",
      height: "auto",
      data: { notes }
    });
    dialogReference.afterClosed().subscribe(result => {
      console.log("dialog closed with out any change");
    });
  }

}


@Component({
  selector: "app-more-dialog.component",
  templateUrl:'./more-diaog.component.html',
  // styleUrls: ['./more-dialog.component.scss']
})
export class MoreDialogComponent implements OnInit {
  ngOnInit() {
  }
}