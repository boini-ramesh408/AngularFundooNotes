import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  @Output() sendColor = new EventEmitter(false);
  color: string;

  colorsList = [
    [
      { colorCode: "rgba(255,255,255,1)", name: "white" },
      { colorCode: "rgba(231, 116, 113,1)", name: "Red" },
      { colorCode: "rgba(249, 150, 107,1)", name: "Orange" },
      { colorCode: "rgba(233, 171, 23,1)", name: "Yellow" }
    ],
    [
      { colorCode: "rgba(137, 195, 92,1)", name: "Green" },
      { colorCode: "rgba(132, 139, 121,1)", name: "Teal" },
      { colorCode: "rgba(198, 222, 255,1)", name: "Blue" },
      { colorCode: "rgba( 114, 143, 206,1)", name: "Dark blue" }
    ],
    [
      { colorCode: "rgba( 158, 123, 255,1)", name: "Purple" },
      { colorCode: "rgba(230, 169, 236,1)", name: "Pink" },
      { colorCode: "rgba(194, 178, 128,1)", name: "Brown" },
      { colorCode: "rgba(229, 228, 226,1)", name: "Gray" }
    ]
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
