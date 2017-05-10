import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuInputModule } from 'au-input';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, AuInputModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
