import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EchartsxModule } from 'echarts-for-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EchartsxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
