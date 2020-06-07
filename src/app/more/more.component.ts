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
  constructor( private _matSnackBar: MatSnackBar,
    private notesService:NotesServiceService ) { }

  ngOnInit() {
  }
  deleteNote(){
    // console.log(this.notes,"delete")

    // return this.http.delete(`http://localhost:8000/notes/api/`, {headers:{
    //   'token': token

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
