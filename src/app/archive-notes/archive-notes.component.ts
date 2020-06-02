import { Component, OnInit,Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  @Output() sendArchive = new EventEmitter()
  @Input() archivedStatus

  is_archived:boolean;

  constructor() { }

  ngOnInit() {
    this.is_archived=this.archivedStatus
  }
  goArchive(){

  
  if (this.is_archived === false || this.archivedStatus === false){
    // console.log('Is _ archived before : ', this.is_archived)
    console.log('archived Status  : ' ,this.archivedStatus)
  this.is_archived = true
  this.archivedStatus = true
  // console.log('Is _ archived after : ', this.is_archived)
  }else{
    this.is_archived = false;
    this.archivedStatus = true;
  }
  this.sendArchive.emit(this.is_archived)
 
}
}
