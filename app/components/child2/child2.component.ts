import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input() str;
  @Output() keydown:EventEmitter<string>=new EventEmitter<string>(); 
  constructor() { }

  ngOnInit() {
  }
 
 

}
