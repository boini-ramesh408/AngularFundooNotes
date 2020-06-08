import { Component, OnInit } from '@angular/core';
import { LabelDialogComponent } from '../label-dialog/label-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLabelDialog(){
    console.log('Opening Dialog Box')
    const dialogRef = this.dialog.open(LabelDialogComponent,{
      // width: '30em', 
      maxHeight: "30em",
    })

    dialogRef.afterClosed().subscribe(result => {
      // this.dataService.getLabels()
      // this.dataService.labelData.subscribe(data => this.labels = data)
    })
  }

}
