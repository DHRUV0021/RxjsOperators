import { Component } from '@angular/core';
import { of, interval, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent {


  //================== OF OPRATOR  ===================//

  source = of(1, 2, 3, 4, 5, 6, 7, 8);  //this is a observable 
  of() {
    const subscribe = this.source.subscribe(val => console.log(val));
  }


  //================== TAP/DO OPRATOR  ===================// 
  test() {
    const Arr = ['dhruv', 'krutik', 'akash', 'ankit', 'niraj', 'krushil'];
    const source = interval(1500);
    let obsSubscripation: Subscription;

    obsSubscripation = source.pipe(
      tap(res => {
        if (res == 2) {
          obsSubscripation.unsubscribe()
        }
      }),
      map(res => Arr[res]))
      .subscribe(res => console.log(res));
  }
}
