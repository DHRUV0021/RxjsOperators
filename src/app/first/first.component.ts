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

  
  first(){
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
  
    //===================TAKE OPRATOR===================//
  takeoprator: any;
  oprators: any;

  take =  from ([1,2,3,4,5,6]);

  Take(){
    this.takeoprator = this.take.pipe(take(2));
    this.oprators = this.takeoprator.subscribe({
      next:(val:any)=>{
        console.log(val);
      },
      error:(err:any)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("Take  oprator example");
      }
    })
    console.log(this.oprators);

  }

  //===================PLUCK OPRATOR===================//

  pluckExample: any;
  pluckoprator: any;

  plucks = from ([{name : 'dhruv' , age :20} ,{name : 'Gorasiya' , age :20}]);

  Pluck(){
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
