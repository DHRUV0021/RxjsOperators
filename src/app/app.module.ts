import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfComponent } from './of/of.component';
import { PipeComponent } from './pipe/pipe.component';
import { FirstComponent } from './first/first.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ZipComponent } from './zip/zip.component';
import { TakeComponent } from './take/take.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    OfComponent,
    PipeComponent,
    FirstComponent,
    CombineLatestComponent,
    ConcatComponent,
    ZipComponent,
    TakeComponent,
    SwitchMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
