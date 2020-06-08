import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { Note_data } from '../model/Note_data';


@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
  // notes:Note_data[];
  @Input() notes;

  @Output() sendDeleteData = new EventEmitter(false);
  is_trashed:boolean
  constructor( private _matSnackBar: MatSnackBar,
    private notesService:NotesServiceService ) { }

  ngOnInit() {
  }
  deleteNote(){
    // if (this.is_trashed === false){
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
}
