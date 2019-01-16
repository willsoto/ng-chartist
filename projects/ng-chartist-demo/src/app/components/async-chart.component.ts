import { Component } from '@angular/core';

import { ChartType } from 'ng-chartist';

import * as Chartist from 'chartist';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { getRandomInt } from './live-chart.component';

declare var require: any;

const data: any = require('../data.json');

@Component({
  selector: 'async-chart',
  template: `
    <h4>Async</h4>
    <x-chartist [data]="data$ | async" [type]="type$ | async"> </x-chartist>
  `
})
export class AsyncChartComponent {
  data$: Observable<Chartist.IChartistData>;
  type$: Observable<ChartType>;

  constructor() {
    // simulate slow API call
    this.data$ = of(data.Pie).pipe(delay(getRandomInt(1000, 3000)));
    this.type$ = of(<ChartType>'Pie').pipe(delay(getRandomInt(1000, 3000)));
  }
}
