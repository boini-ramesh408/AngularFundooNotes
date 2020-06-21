import { Component, OnInit, Output ,EventEmitter, DoCheck} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { FormControl } from '@angular/forms';
import { Note_data } from '../model/Note_data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,DoCheck {
  @Output() sendListView = new EventEmitter(false);
  searchText:string
  toggleList:boolean;
  notes:Note_data[];
  showCard: boolean;
  viewListGridMessage = false;
  constructor(private http: HttpClient,private notesService:NotesServiceService) 
  {
    

      this.notesService.getAllNotes()
  
      .subscribe((response:any) => { 
  
        this.notes=response.data
  
       
         // data.push(response)
       
        //  console.log(this.notes,"res")
       }
       )
    
  }
  ngDoCheck() {
    this.notesService.searchInputData = this.searchText;
    console.log(this.searchText,"update")
    if ( window.innerWidth < 600) {
        this.viewListGridMessage = false;
        this.notesService.gridListView = true;
    } else {

      this.notesService.gridListView = this.viewListGridMessage;
    }

    
  }


  ngOnInit() {
    console.log(this.searchText)
    
    this.toggleList = false; 
    this.notesService.gridListView = this.viewListGridMessage;

  }
  
  submitSearch(){ 
    // console.log("search notes starts",this.searchText)
    let searchData = {'title': this.searchText}
    // this.notesService.getSearchNotes(searchData) 
    this.notesService.searchSource.next(this.searchText)
   
  }

  getListData($event){
    // console.log('List-Grid view event in :', $event);
    this.notesService.GridListStatusSource.next($event)

    // this.sendListView.emit($event)
  }
  viewChange() {
   
      this.viewListGridMessage = !this.viewListGridMessage;
    // console.log(this.viewListGridMessage,"status")
  }



  // picChangeDialog() {
  //   const dialogRef = this.dialog.open(ChangeProfilePictureComponent,
  //     {
  //       width: '750px',
  //       height: '450px'
  //     });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result !== undefined) {
  //       this.userInfo.image_url = result.image_url;
  //     }
  //   },
  //   err => {
  //     if (err.status === 401) {
  //       localStorage.clear();
  //       this.router.navigate(['/login']);
  //       alert(err.error.messages[0].message);
  //     } else if (err.status === 0) {
  //       alert(err.message);
  //       } else {
  //       console.log(err.error.messages[0].message);
  //       alert(err.error.messages[0].message);
  //     }
  //   });
  // }

  Search(){
    this.notes=this.notes.filter(res=>{
      return res.title.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
    })
  }

  openCard(){
    console.log("data")
    if (this.showCard === false){
      console.log("data1")
      return this.showCard = true
    }
    
    else{
      return this.showCard = false 
    }
  }
}
