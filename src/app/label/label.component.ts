import { Component, OnInit, Input } from '@angular/core';
import { LabelDialogComponent } from '../label-dialog/label-dialog.component';
import { MatDialog } from '@angular/material';
import { Note_data } from '../model/Note_data';
import { NotesServiceService } from '../services/notesService/notes-service.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  labels


  constructor(public dialog: MatDialog, private ns: NotesServiceService) {
    this.ns.getAllLabels()
    this.ns.labelData.subscribe(result => {this.labels = result})
    
    console.log('Labels : ', this.labels)
   }

  ngOnInit(): void {
    console.log(this.labels,"lablel")
  }

  openLabelDialog(labels){
    console.log('Opening Dialog Box',labels)
    const dialogRef = this.dialog.open(LabelDialogComponent,{
      // width: '30em', 
      maxHeight: "30em",
      data: { labels }
    })

    dialogRef.afterClosed().subscribe(result => {
      // this.dataService.getLabels()
      this.ns.labelData.subscribe(data => this.labels = data)
    })

  }
  
  
}
