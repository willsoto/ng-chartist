import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChartistModule } from '../src/chartist.module';

import {
  AsyncChartComponent,
  DynamicChartComponent,
  LiveChartComponent
} from './components';

import { DemoAppComponent } from './demo';

@NgModule({
  bootstrap: [DemoAppComponent],
  declarations: [
    DemoAppComponent,
    LiveChartComponent,
    AsyncChartComponent,
    DynamicChartComponent
  ],
  imports: [ChartistModule, BrowserModule, FormsModule]
})
export class AppModule {}
