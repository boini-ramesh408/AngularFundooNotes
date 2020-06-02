import { Component, OnInit,Input } from '@angular/core';
import { Note_data } from "../model/Note_data";
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit {


  @Input() note;
  
  constructor() { }


  ngOnInit() {
    
    console.log(this.note,"notes")
   
  }

}
