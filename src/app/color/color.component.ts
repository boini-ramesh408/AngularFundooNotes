import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { element } from 'protractor';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  @Output() sendColor = new EventEmitter()
  dialogRef;
  state;
  color:string;

  constructor(public dialog : MatDialog) { 
    this.dialogRef = dialog;
    this.state = null;
  }

  ngOnInit(): void {
  }

  openColorDialog(event){
      
      // let source_element = event.srcElement;
      // console.log(event.srcElement)
      // console.log(event)
      let rect = event.target.getBoundingClientRect()
      console.log(rect)
      let leftX = rect.x + 'px';
      let topY = (rect.y +40) + 'px';
      // var positionX = event.pageX + 'px'//event.position+ 'px';
      // console.log(positionX);
      // var positionY = event.pageY + 'px';
      // console.log(positionY);



    this.state.afterClosed().subscribe(result => {
      this.color = result
      this.sendColor.emit(this.color)
      // console.log(`Result in color-picker :  ${this.color}`)
    });
  }
  pickColor($event){
    const element = $event.srcElement;
    console.log(element.style.backgroundColor);
    this.color = element.style.backgroundColor;
    console.log(this.color);
    this.dialogRef.close(this.color)
  }
}

//Color Picker Dialog Component








