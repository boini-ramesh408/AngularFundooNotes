import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { Note_data } from '../model/Note_data';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit,DoCheck {

  notes:Note_data[];
  searchText:string;
  // title = new FormControl('')

  constructor(private router: Router,private http: HttpClient,private notesService:NotesServiceService)
   {  

  //     this.notesService.searchStatus.subscribe(data => {
     
  //   this.searchText = data
  //   console.log('searched  data:',this.searchText)
  // })
 }

 ngDoCheck() {

  this.searchText = this.notesService.searchInputData;
  console.log( this.notesService.searchInputData,"status1")


}
  ngOnInit() {
    console.log(this.notes,"search purpose")
    //TODO below code for searching backend code
    console.log("search enter")
 
    this.notesService.getAllNotes().subscribe((response:any) => {
     
      this.notes = response['data']

      console.log('searched note data:',response['data'])


    })
  }

 Search(){

   this.notes=this.notes.filter(res=>{
     return res.title.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())

   })
 }
  }
