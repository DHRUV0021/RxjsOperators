import { Component } from '@angular/core';
import { fromEvent, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxjsOperators';


 //===================TACK UNTIL OPRATOR===================//
ngOnInit(): void {
// const source = interval(1000);
// const clicks = fromEvent(document, 'click');
// const result = source.pipe(takeUntil(clicks));
// result.subscribe(x => console.log(x));
}

}
