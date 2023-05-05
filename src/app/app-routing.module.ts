import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';

const routes: Routes = [
  {
    path:'combine',
    component:CombineLatestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


