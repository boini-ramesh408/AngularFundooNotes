import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  url="note/"
  url1="getnote/"
  constructor(private hs:HttpServicesService) { }

  createNotes(data){
  
    return this.hs.post(this.url,data)
    
  }
  getAllNotes(){
    return this.hs.get(this.url)
    
  }
  
}
