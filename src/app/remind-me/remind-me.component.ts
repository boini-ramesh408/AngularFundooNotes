import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { RemindBoxComponent } from '../remind-box/remind-box.component';

@Component({
  selector: 'app-remind-me',
  templateUrl: './remind-me.component.html',
  styleUrls: ['./remind-me.component.scss']
})
export class RemindMeComponent implements OnInit {

  constructor(  private notesService:NotesServiceService,
    private dialog: MatDialog,private router: Router,) { }

  ngOnInit() {
  }
  
}
