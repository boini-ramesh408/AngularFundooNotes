import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-display-search',
  templateUrl: './display-search.component.html',
  styleUrls: ['./display-search.component.scss']
})
export class DisplaySearchComponent implements OnInit {
  @Input() note;
  constructor() { }

  ngOnInit() {
  }

}
