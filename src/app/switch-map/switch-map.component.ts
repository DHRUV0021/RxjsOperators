import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, fromEvent, merge, empty } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';


@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {

  @ViewChild('remaining',{static:true}) remaining:ElementRef | undefined;
  @ViewChild('pause',{static:true}) pause:ElementRef | undefined;
  @ViewChild('resume',{static:true}) resume:ElementRef | undefined;

  test(){
    const COUNTDOWN_SECONDS = 10;

    const interval$ = interval(1000).pipe(mapTo(-1));
    const pause$ = fromEvent(this.pause?.nativeElement, 'click').pipe(mapTo(false));
    const resume$ = fromEvent(this.resume?.nativeElement, 'click').pipe(mapTo(true));
    
    merge(pause$, resume$)
      .pipe(
        startWith(true),
        switchMap((val) => (val ? interval$ : empty())),
        scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
        takeWhile((v) => v >= 1)
      )
      .subscribe((val: any) => (console.log(val)));
    }

    ngAfterViewInit(): void {
      this.test();
    }
}
