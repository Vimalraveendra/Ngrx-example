import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterControlsComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
