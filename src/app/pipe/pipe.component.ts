import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  //===================Of OPRATOR & PIPE OPRATOR & FILTER OPRATOR===================//
  source = of(1, 2, 3, 4, 5, 6);
  user!: any;
  subscribe!: any;

  pipe() {
    this.user = this.source.pipe(filter((val: any) => { return val % 2 == 0 }));
    this.subscribe = this.user.subscribe({
      next: (val: any) => {
        console.log(val);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log("okkkk");
      }
    });
    console.log(this.subscribe);
  }

  //===================FROM OPRATOR & MAP OPRATOR  ===================//
  mapping = from([1, 2, 3, 4, 5, 6])
  abc: any;
  maps: any;

  map() {
    this.abc = this.mapping.pipe(map((val: any) => { return val + 10 }));

    this.maps = this.abc.subscribe({
      next: (val: any) => {
        console.log(val);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log("okkkk");
      }
    });
    console.log(this.maps);
  }

}
