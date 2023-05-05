import { Component } from '@angular/core';
import { first, from, pluck, take } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  //===================FIRST OPRATOR===================//
  source = from([1,2,3,4,5,6,7,8])
  example:any;
  subscribe: any;

  
  firstgetData(){
    this.example = this.source.pipe(first((val:any) => val > 5 ,'nothing'));
    
    this.subscribe  = this.example.subscribe({
      next:(val: any)=>{
        console.log(val);
      },
      error:(err:any)=>{
        console.log(err);
      },
      complete:()=>{
      console.log("first oprator example");
      }
    });
    console.log(this.subscribe);
  }
  

  //===================PLUCK OPRATOR===================//

  pluckExample: any;
  pluckoprator: any;

  plucks = from ([{name : 'dhruv' , age :20} ,{name : 'Gorasiya' , age :20}]);

  PluckGetData(){
    this.pluckExample = this.plucks.pipe(pluck('name'));

    this.pluckoprator = this.pluckExample.subscribe({
      next:(val:any)=>{
        console.log(val);
      },
      error:(err:any)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('pluck oprator  example');
      }
    })
    console.log(this.pluckoprator);
  }

}
