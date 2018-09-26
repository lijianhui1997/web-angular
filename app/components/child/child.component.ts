import { Component, OnInit, Input, Output, EventEmitter,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  input: any;
  
  constructor() { 
  }//构造器
 // @Input() arr;
  @Output() private keydown=new EventEmitter();
  commit(e){
    if(e.keyCode==13){
      this.keydown.emit(this.input)
      this.input="";
    }
  }
  
  
  ngOnInit() {
  }//周期

}
