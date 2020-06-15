import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Note_data } from '../model/Note_data';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
 
  @Output() sendColor = new EventEmitter(false);
  @Output() updateColor = new EventEmitter(false);
  
  notes:Note_data[];
  color: string;

  colorsList = [
    [
      { colorCode: "rgba(255,255,255,1)", name: "white" },
      { colorCode: "#f28b82", name: "Red" },
      { colorCode:  "#fbbc04", name: "Orange" },
      { colorCode:  "#fff475", name: "Yellow" }
    ],
    [
      { colorCode:" #ccff90", name: "Green" },
      { colorCode: "#a7ffeb", name: "Teal" },
      { colorCode: "#cbf0f8", name: "Blue" },
      { colorCode: "#aecbfa", name: "Dark blue" }
    ],
    [
      { colorCode: "#d7aefb", name: "Purple" },
      { colorCode: "#fdcfe8", name: "Pink" },
      { colorCode: "#e6c9a8", name: "Brown" },
      { colorCode: "#e8eaed", name: "Gray" }
    ]
  ];
  constructor(
   
  ) { }

  ngOnInit() {
 
  }
 
  changeColor(color) {
    console.log("fetched color object : ", color);
    // transfering color information to a variable
    this.notes = color;
    console.log("note color from variable : ", this.notes);
    this.sendColor.emit(this.notes)
    // this.updateColor.emit(this.notes)

   
      
       
          
        
      
  }
}
