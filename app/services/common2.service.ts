import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

//@Injectable({
  //providedIn: 'root'
//})
export class Common2Service implements CommonService {
  set(key,value){
    console.log('set');
    localStorage.setItem(key,value);
 }
 get(key){
   console.log('get方法调用了');
   return localStorage.getItem(key);
 }

  constructor() { }
}
