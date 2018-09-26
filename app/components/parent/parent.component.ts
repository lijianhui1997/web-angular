import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ShareService } from 'src/app/services/share.service';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[CommonService]
})
export class ParentComponent implements OnInit {
  @Input() name='';
  @Input() str=[]; 
  add(msg:string){
    var obj={
      name:msg
    }
    this.str.push(obj);

  }
  constructor() { 
  }
  
 
  
  ngOnInit() {
  }

}
