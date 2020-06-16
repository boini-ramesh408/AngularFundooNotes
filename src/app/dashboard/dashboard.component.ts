import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchText = new FormControl('')

  constructor(private http: HttpClient,private notesService:NotesServiceService) 
  {
    
  }

  ngOnInit() {
  }
  
  submitSearch(){
    console.log("search notes starts",this.searchText.value)
    let searchData = {'title': this.searchText.value}
    this.notesService.getSearchNotes(searchData) 
   
  }

  getListData($event){
    console.log('List-Grid view event in Sidenav:', $event);
    // this.sendListView.emit($event)
  }

}
