import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpServices/http-services.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  url="note/"
  url1="getnote/"
  surl="search/"
  private _subject = new Subject<any>();

  private labelSource = new BehaviorSubject('No labels to show');
  public labelData = this.labelSource.asObservable();

  private userSource = new BehaviorSubject('No Users');
  public usersList = this.userSource.asObservable();
  
  private searchSource = new BehaviorSubject('No Notes');
  public searchNotes = this.searchSource.asObservable();

  public collabSource = new BehaviorSubject('No Collaborators');
  public collabList = this.collabSource.asObservable();

  public NoteLabelSource = new BehaviorSubject('No Notes label');
  public NoteLabelList = this.NoteLabelSource.asObservable();

  public AddcollabSource = new BehaviorSubject('No colabs to show');
  public AddColablData = this.AddcollabSource.asObservable();

  public GridListStatusSource = new BehaviorSubject('No status to show');
  public GridListStatus = this.GridListStatusSource.asObservable();

  constructor(private http: HttpClient,private hs:HttpServicesService) { }
  public get autoRefesh() {
    return this._subject;
  }
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
    return this.hs.post(this.surl,searchData)
    // return this.http.post('http://127.0.0.1:8000/api/search/',searchData)
    .subscribe(response => {
      let searchNoteData= response['data']
      // console.log(searchNoteData)
      this.searchSource.next(searchNoteData)
    });

  }
  getAllLabels(){
    this.http.get("http://127.0.0.1:8000/api/label/")
    .subscribe(response => {
      let label = response['data']
      // console.log(label.name,"lbl")
      this.labelSource.next(label);
      
    })
  }
  deleteLabelWithId(id){
    this.http.delete(`http://127.0.0.1:8000/api/label/${id}`)
    .subscribe(response => {
      console.log(response,"label deleted")
    })
  }
  updateLabelWithId(id,data){
    // console.log(id,"id")
    data={"name":data}
    // console.log(data,"data")
    this.http.put(`http://127.0.0.1:8000/api/label/${id}`,data)
    .subscribe(response => {
      console.log(response,"label deleted")
    })
  }

  uploadProfilePicture(data){
    console.log(data.name,"imageData")
    let formData = new FormData()
    formData.append('bridge', data)
   
    return this.http.post("http://127.0.0.1:8000/api/uploadImage/",formData)
  }
}
