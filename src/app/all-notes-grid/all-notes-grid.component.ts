import { Component, OnInit, Input } from '@angular/core';
import { NotesServiceService } from '../services/notesService/notes-service.service';
// import { DataService } from '../services/DataService/data-service.service';


@Component({
  selector: 'app-all-notes-grid',
  templateUrl: './all-notes-grid.component.html',
  styleUrls: ['./all-notes-grid.component.scss']
})
export class AllNotesGridComponent implements OnInit {

  allNotes; 
  @Input() view ;

  constructor(private allNotesService: NotesServiceService) { }

  ngOnInit(): void {
    console.log("a")
    this.recieveNotes()
    // console.log(this.allNotes)
  }

  recieveNotes(){
    this.allNotesService.getAllNotes()
    
  }


}
