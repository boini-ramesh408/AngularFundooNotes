import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchedNotes
  title = new FormControl('')
  constructor(private router: Router,private http: HttpClient,private notesService:NotesServiceService) { }

  ngOnInit() {
    console.log("search enter")
    this.notesService.searchNotes.subscribe(data => {
     
      this.searchedNotes = data
      console.log('searched note data:',this.searchedNotes)
    })

  }
 
  }
