import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';
import { FormControl, Validators } from '@angular/forms';
import { Note_data } from '../model/Note_data';
import { NotesServiceService } from '../services/notesService/notes-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-label-dialog',
  templateUrl: './label-dialog.component.html',
  styleUrls: ['./label-dialog.component.scss']
})
export class LabelDialogComponent implements OnInit {
  labels 

  showDeleteButton = false;

  label = new FormControl(null, [
    Validators.min(2)
  ])

  constructor(public dialogRef : MatDialogRef<LabelDialogComponent>,
    public ns : NotesServiceService,private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data
    ){}
    public httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json",
        token: localStorage.getItem("token")
      })
    };
  ngOnInit(){
    this.ns.getAllLabels();
    this.ns.labelData.subscribe(result => {this.labels = result})
    // console.log('coming from here')
  }
  
  ngOnDestroy(){
  }

  resetLabelInputData(){
    this.label= null;
    console.log(this.label);
  }

  getButton(){
    if(this.showDeleteButton === false){
      return this.showDeleteButton = true
    }
  }

  removeButton(){
    if(this.showDeleteButton === true){
      return this.showDeleteButton = false
    }
  }

  submitLabel(){
    console.log('Label Name : ', this.label.value);
    let token = localStorage.getItem('token')
    let data = {'name': this.label.value}
    const headers = new HttpHeaders().set("content-type", "application/json");
    if (this.label.value != null || this.label.value == ''){
      this.http.post("http://127.0.0.1:8000/api/label/",data)
     .subscribe(result => {
        console.log('Data in Submit Labels : ', result)
        if (result['status'] === true){
         
          this.ns.getAllLabels()
          this.ns.labelData.subscribe(data => this.labels = data)
          console.log(data,"dataaa")
          this.labels=data
          console.log('Labels after Submitting : ', this.labels)
         
        }
      })
    }  
  }

  deleteLabel(id){
    console.log('Label ID : ', id);
    
    this.ns.deleteLabelWithId(id)
      this.ns.getAllLabels()
      this.ns.labelData.subscribe(data => this.labels = data)
    
   
  }

  updateLabel(label){

    console.log(label,"update label")
    
  
    this.ns.updateLabelWithId(label.id,label.name)
    
      
        this.ns.getAllLabels()
        this.ns.labelData.subscribe(data => this.labels = data)
      }
   
  

}
