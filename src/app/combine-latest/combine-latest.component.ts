import { Component } from '@angular/core';
import { fromEvent, interval, of, takeUntil, timer, combineLatest } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent {

  //===================COMBINE-LATEST OPRATOR===================// call  root html file
  ngOnInit(): void {
    const source = of('a', 'b', 'c', 'd');
    const source2 = of('1', '2', '3', '4');

    const result = combineLatest(source, source2);
    result.subscribe(res => console.log(res));
  }
}
