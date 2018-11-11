import { Component } from '@angular/core';

/**
 * Generated class for the Zujian1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'zujian1',
  templateUrl: 'zujian1.html'
})
export class Zujian1Component {

  text: string;

  constructor() {
    console.log('Hello Zujian1Component Component');
    this.text = 'ionic';
  }

}
