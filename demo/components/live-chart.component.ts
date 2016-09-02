import {
  Component,
  OnDestroy
} from '@angular/core';

import {
  ChartType
} from '../../src/chartist.component';

export interface LiveData {
  labels: string[];
  series: Array<Array<number>>;
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'live-chart',
  template: `
    <h4>Live Updating</h4>
    <x-chartist
      [data]="data"
      [type]="type">
    </x-chartist>
  `
})
class LiveChartComponent implements OnDestroy {
  data: LiveData;
  type: ChartType;

  private interval: any;

  constructor() {
    this.data = {
      labels: [],
      series: []
    };
    this.type = 'Bar';

    this.interval = setInterval(() => {
      let time: Date = new Date();
      let formattedTime: string = [
        time.getHours(),
        time.getMinutes(),
        time.getSeconds()
      ].join(':');
      let random: number = getRandomInt(1, 40);

      this.data.labels.push(formattedTime);
      this.data.series.push([random]);

      this.data = Object.assign({}, this.data);
    }, 2500);

  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}

export {
  LiveChartComponent
};
