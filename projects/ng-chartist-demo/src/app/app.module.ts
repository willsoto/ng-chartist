import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartistModule } from 'ng-chartist';
import {
  AsyncChartComponent,
  DynamicChartComponent,
  LiveChartComponent,
  TooltipChartComponent
} from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AsyncChartComponent,
    DynamicChartComponent,
    LiveChartComponent,
    TooltipChartComponent
  ],
  imports: [BrowserModule, ChartistModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
