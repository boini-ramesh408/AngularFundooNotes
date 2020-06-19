import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-grid-list-view',
  templateUrl: './grid-list-view.component.html',
  styleUrls: ['./grid-list-view.component.scss']
})
export class GridListViewComponent implements OnInit {
  toggleList:boolean;
  @Output() listData= new EventEmitter(false)
  constructor() { }

  ngOnInit() { 
    this.toggleList = false; 
  }
  
  switchView(){
    if (this.toggleList === true){
      this.listData.emit(false)
      return this.toggleList = false
    }else{
      this.listData.emit(true)
      return this.toggleList = true;
    }
  }
}
