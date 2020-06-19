import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() sendListView = new EventEmitter(false);
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
    console.log('List-Grid view event in :', $event);
    // this.notesService.GridListStatusSource.next($event)

    // this.sendListView.emit($event)
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
}
