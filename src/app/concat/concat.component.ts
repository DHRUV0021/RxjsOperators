import { Component } from '@angular/core';
import { concat, interval, map, of, range, take, concatAll, from, concatMap, mergeMap, takeUntil, timer, mergeAll } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent {





  //===================CONCAT OPRATOR===================//
  getData(data: any) {
    return of(data + ' API CAll>>');
  }

  concatDataget() {

    const source = from(['First', 'Second', 'Thrid']);
    // const result = source.pipe(concatMap(res => this.getData(res)));
    const result = source.pipe(map(res => this.getData(res)),concatAll()); //concatAll using // //-without 2 subscribe to use one concatAll oprator use to code
    result.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("concat example");
      }
    });
  }

  //===================MERGE OPRATOR===================//

  GetData2(data: any) {
    return of(data + ' merge data')
  }

  mergeDataget() {

    const source2 = from(['Dhruv', 'Krutik', 'Akash', 'Niraj']);
    // const result = source2.pipe(mergeMap(res => this.MergeGetData(res)));
    const result = source2.pipe(map(res => this.GetData2(res)),mergeAll()); // mergeAll using
    result.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("merge example");
      }
    })
  }


}


