import { Component } from '@angular/core';
import { ChartistComponent, ChartType } from '../../src/chartist.component';

const data: any = require('../data.json');

@Component({
  selector: 'async-chart',
  directives: [ChartistComponent],
  template: `
    <h4>Async</h4>
    <chartist
      [data]="data"
      [type]="type">
    </chartist>
  `
})
class AsyncChartComponent {
  data: Promise<Chartist.IChartistData>;
  type: Promise<ChartType>;

  constructor() {
    // simulate slow API call
    this.data = new Promise(function(resolve: any): void {
      setTimeout(function(): void {
        resolve(data['Pie']);
      }, 5000);
    });

    this.type = new Promise(function(resolve: any): void {
      setTimeout(function(): void {
        resolve('Pie');
      }, 5000);
    });
  }
}

export {
  AsyncChartComponent
};
