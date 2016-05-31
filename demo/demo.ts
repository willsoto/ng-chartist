import { Component } from '@angular/core';
import { ChartistComponent, ChartType } from './../angular2-chartist';

@Component({
  selector: 'demo-app',
  directives: [ChartistComponent],
  templateUrl: './demo.template.html'
})
export class DemoApp {
  data: any;
  type: ChartType;

  constructor() {
    this.type = 'Bar';
    this.data = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      series: [
        [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
        [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
      ]
    };
  }
}
