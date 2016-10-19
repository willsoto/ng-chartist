import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  FormsModule
} from '@angular/forms';

import {
  ChartistModule
} from '../dist/angular2-chartist';

import {
  AsyncChartComponent,
  DynamicChartComponent,
  LiveChartComponent
} from './components';

import {
  DemoAppComponent
} from './demo';

@NgModule({
  declarations: [
    DemoAppComponent,
    LiveChartComponent,
    AsyncChartComponent,
    DynamicChartComponent
  ],
  imports: [
    ChartistModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [DemoAppComponent]
})
export class AppModule { }
