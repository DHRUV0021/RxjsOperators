import { Component } from '@angular/core';
import { Observable, map, of, zip, first } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent {

  //=================== ZIP OPRATOR  ===================//

  getZipData() {

    const first = of(21,22,23,24);
    const second = of ("dhruv" ,"krutik");
    const thired =  of ( "angular", "angular" ,".net" , ".net");

      zip(first ,second ,thired).pipe(map(([first,second,thired]) => ({first,second,thired}))
    ).subscribe({
      next:(res)=>{
        console.log(res.first);
        console.log(res.second);
        console.log(res.thired);
      },
      error:(err)=>{
        console.log(err);
      }
    });

    //------------------- example-2
    const age$ = of(27, 25,26,27,28);
    const name$ = of('Foo', 'Bar', 'Beer','js');

    zip(age$, name$).pipe(
      map(([age, name]) => ({ age, name }))
    )
      .subscribe(x => console.log(x));
  }
}

