import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchSource
title:string;
  constructor(private http: HttpClient,private notesService:NotesServiceService) 
  {
    
  }

  ngOnInit() {
  }
  submitSearch(){
    let searchData = {'title': this.title}
    this.http.post('http://127.0.0.1:8000/api/search/',searchData)
    .subscribe(response => {
      let searchNoteData= response['data']
      console.log(searchNoteData)
      this.searchSource.next(searchNoteData)
    });
  }

}
