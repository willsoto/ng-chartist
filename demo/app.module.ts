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
  ChartistComponent
} from '../src/chartist.component';

import {
  LiveChartComponent
} from './components/live-chart.component';
import {
  AsyncChartComponent
} from './components/async-chart.component';
import {
  DynamicChartComponent
} from './components/dynamic-chart.component';

import {
  DemoAppComponent
} from './demo';

@NgModule({
  declarations: [
    DemoAppComponent,
    ChartistComponent,
    LiveChartComponent,
    AsyncChartComponent,
    DynamicChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [DemoAppComponent]
})
export class AppModule { }
