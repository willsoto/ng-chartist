import { Component } from '@angular/core';
import { ChartistComponent, ChartType } from '../../src/chartist.component';

const data: any = require('../data.json');

@Component({
  selector: 'dynamic-chart',
  directives: [ChartistComponent],
  template: `
    <div class="row">
      <div class="col-md-6">
        <h4>Dynamic Chart Types</h4>
      </div>
      <div class="col-md-6">
        <select class="form-control" [(ngModel)]="type">
          <option *ngFor="let type of chartTypes" [ngValue]="type">{{type}}</option>
        </select>
      </div>
    </div>
    <chartist
      [data]="data"
      [type]="type"
      [options]="options">
    </chartist>
  `
})
class DynamicChartComponent {
  type: ChartType;
  data: Chartist.IChartistData;
  options: any;

  chartTypes: ChartType[];

  constructor() {
    this.chartTypes = ['Bar', 'Line'];

    this.type = 'Bar';
    this.data = data['Bar'];
    this.options = {
      axisX: {
        showLabel: false
      },
      axisY: {
        showLabel: false
      }
    };
  }
}

export {
  DynamicChartComponent
};
