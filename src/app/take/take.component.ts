import { Component } from '@angular/core';
import { from, interval, take, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {

  //===================TAKE OPRATOR===================//
  takeoprator: any;
  oprators: any;

  take = from([1, 2, 3, 4, 5, 6]);

  Take() {
    this.takeoprator = this.take.pipe(take(2));
    this.oprators = this.takeoprator.subscribe({
      next: (val: any) => {
        console.log(val);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log("Take  oprator example");
      }
    })
    console.log(this.oprators);
  }

  //===================TAKEUNTIL OPRATOR===================//
  takeUntil() {

    const source = interval(50);
    const timer$ = timer(80);
    const example = source.pipe(takeUntil(timer$));
    const subscribe = example.subscribe(val => console.log(val));
  }

  // ----------TAKE UNTIL EXAMPLE -2 OPRATOR
  takeUntil2() {
    const source$ = interval(1000);
    const timer$ = timer(5000);

    const example = source$.pipe(takeUntil(timer$));
    const subscribe = example.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("complete Take oprater");
      }
    });
  }

}
