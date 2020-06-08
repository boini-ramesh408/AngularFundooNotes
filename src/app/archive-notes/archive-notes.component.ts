import { Component, OnInit,Output, EventEmitter,Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  @Output() sendArchive = new EventEmitter()
  @Input() archivedStatus

  is_archive:boolean;

  constructor(private _matSnackBar: MatSnackBar,) { }

  ngOnInit() {
    this.is_archive=this.archivedStatus
  }
  
  goArchive(){

  
  if (this.is_archive === false || this.archivedStatus === false){
    // console.log('Is _ archived before : ', this.is_archived)
    console.log('archived Status  : ' ,this.archivedStatus)
  this.is_archive = true
  this.archivedStatus = true
  this._matSnackBar.open('Archieve notes added', 'close')
  ._dismissAfter(2500);
  // console.log('Is _ archived after : ', this.is_archived)
  }else{
    this.is_archive = false;
    this.archivedStatus = true;
  }
  if(this.is_archive === true){
    this.sendArchive.emit(this.is_archive)
  }
 
 
}
}
