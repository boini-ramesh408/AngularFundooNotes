import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { HttpClient } from '@angular/common/http';
import { Note_data } from '../model/Note_data';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-display-reminder',
  templateUrl: './display-reminder.component.html',
  styleUrls: ['./display-reminder.component.scss']
})
export class DisplayReminderComponent implements OnInit {
  notes:Note_data[];

  expand: any = false
  constructor(private ns:NotesServiceService,private http: HttpClient,
     private _matSnackBar: MatSnackBar,
    ) { }

  ngOnInit() {
    this.getReminders()
  }
  getReminders(){
    let token = localStorage.getItem('token')

    this.http.get('http://127.0.0.1:8000/api/remainder/' )
    .subscribe((response:any) => { 

      this._matSnackBar.open('reminders displayed', 'close')
      ._dismissAfter(2500);
      
       this.notes=response.data
      
      console.log(response)
     }
     )
  }

}
