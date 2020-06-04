import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpServices/http-services.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  url="note/"
  url1="getnote/"
  constructor(private http: HttpClient,private hs:HttpServicesService) { }

  createNotes(data){
  
    return this.hs.post(this.url,data)
    
  }
  getAllNotes(){
    return this.hs.get(this.url)
    
  }
  deleteNoteWithId(id){
    return this.http.delete(`http://127.0.0.1:8000/api/note/${id}`)
  }
  
}
