import { Component } from '@angular/core';
import { ChartType } from 'ng-chartist';
import { IChartistData, ILineChartOptions } from 'chartist';
import ChartistTooltip from 'chartist-plugin-tooltips-updated';

@Component({
  selector: 'tooltip-chart',
  styles: [
    `
      :host::ng-deep .chartist-tooltip {
        /* Workaround for incorrect tooltip position in "chartist-plugin-tooltips-updated" version 0.0.21 */
        margin-left: 20px;
        margin-top: 55px;
      }
    `
  ],
  template: `
    <h4>Tooltips</h4>
    <x-chartist [data]="data" [type]="type" [options]="options"> </x-chartist>
  `
})
export class TooltipChartComponent {
  type: ChartType = 'Line';
  data: IChartistData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
  };
  options: ILineChartOptions = {
    plugins: [ChartistTooltip()]
  };
}
