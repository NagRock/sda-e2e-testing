import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivideComponent } from './divide/divide.component';
import { SumComponent } from './sum/sum.component';
import { SubtractComponent } from './subtract/subtract.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MultiplyComponent,
    DivideComponent,
    SumComponent,
    SubtractComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
