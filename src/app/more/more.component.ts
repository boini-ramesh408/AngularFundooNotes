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

  showLabelsSignal:Boolean
  @Output() sendMoreData = new EventEmitter(false);

  @Output() sendDeleteData = new EventEmitter(false);

  is_trashed:boolean
  
  constructor( private _matSnackBar: MatSnackBar,
    private notesService:NotesServiceService ,
    private _matDialog:MatDialog) { }

  ngOnInit() {
  }
  deleteNote(){
    console.log("datatatat")

    // if (this.is_trashed === false){
    //   console.log(this.is_trashed,"trashed")
    //   // console.log('Is _ archived before : ', this.is_archived)
      
    //     this.is_trashed = true
   
    // this._matSnackBar.open('Archieve notes added', 'close')
    // ._dismissAfter(2500);
    // // console.log('Is _ archived after : ', this.is_archived)
    // }else{
    //   this.is_trashed = false;
   
    // }
    
    this.notesService.deleteNoteWithId(this.notes.id)
    .subscribe((response:any) => { 
      this.sendDeleteData.emit(this.notes)
      this._matSnackBar.open('Note deleted ', 'close')
              ._dismissAfter(2500);
      
       // data.push(response)
     
       console.log(response)
     }
     )
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
