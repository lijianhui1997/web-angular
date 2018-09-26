import { Component, OnInit, Input,EventEmitter } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-componentschild',
  templateUrl: './componentschild.component.html',
  styleUrls: ['./componentschild.component.css']
})
export class ComponentschildComponent implements OnInit {

  constructor() { }
  @Input() arr;
  @Output() delIndex=new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
  ngOnInit() {
  }

}
