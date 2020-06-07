import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-remind-box',
  templateUrl: './remind-box.component.html',
  styleUrls: ['./remind-box.component.scss']
})
export class RemindBoxComponent implements OnInit {

  inputDate;
  inputTime;

  dateOutput;

  pickDate:boolean;

  constructor(public dialogRef: MatDialogRef<RemindBoxComponent>){
    this.pickDate = false;
  }
  ngOnInit() {
  
  }

  openDateTime(){
    return this.pickDate = true;
  }

  closeDateTime(){
    console.log("pick")
    if (this.inputDate != undefined && this.inputTime != undefined){
      let inputDateresult = this.inputDate.split('-'); console.log(`Split Date : ${inputDateresult}`)
    let inputTimeResult = this.inputTime.split(':'); 
    let date = new Date(inputDateresult[0], inputDateresult[1]-1, inputDateresult[2], inputTimeResult[0], inputTimeResult[1]);
    this.dateOutput = date;
    console.log(`Date Object : ${this.dateOutput}`)
    this.dialogRef.close(this.dateOutput)
    }else{
      return this.pickDate = false;
    }
  }

  save(){
    if (this.inputDate != undefined && this.inputTime != undefined){
      let inputDateresult = this.inputDate.split('-'); console.log(`Split Date : ${inputDateresult}`)
    let inputTimeResult = this.inputTime.split(':'); 
    let date = new Date(inputDateresult[0], inputDateresult[1]-1, inputDateresult[2], inputTimeResult[0], inputTimeResult[1]);
    this.dateOutput = date;
    console.log(`Date Object : ${this.dateOutput}`)
    this.dialogRef.close(this.dateOutput)
    } 
  }


}
