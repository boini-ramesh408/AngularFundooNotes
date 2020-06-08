import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpServices/http-services.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  url="note/"
  url1="getnote/"


  private searchSource = new BehaviorSubject('No Notes');
  public searchNotes = this.searchSource.asObservable();

  constructor(private http: HttpClient,private hs:HttpServicesService) { }

  createNotes(data){
  
    return this.hs.post(this.url,data)
    
  }
  getAllNotes(){
    return this.hs.get(this.url)
    
  }

  deleteNoteWithId(id){
    // return this.http.delete(`http://127.0.0.1:8000/api/note/${id}`)
    return this.hs.delete(this.url,id)
  }
  updateNotesWithId(id,data){
    // console.log(data,"data")
    return this.hs.put(this.url,id,data)
    // return this.http.put(`http://127.0.0.1:8000/api/note/${id}`,data)
  }
  getSearchNotes(searchData){
    return this.http.post('http://127.0.0.1:8000/api/search/',searchData)
    .subscribe(response => {
      let searchNoteData= response['data']
      console.log(searchNoteData)
      this.searchSource.next(searchNoteData)
    });

  }
  
}
