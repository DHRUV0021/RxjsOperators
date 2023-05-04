import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent {

  source = of(1,2,3,4,5,6,7,8);
 of(){
   const subscribe = this.source.subscribe(val => console.log(val));
 }

}
