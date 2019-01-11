import { Component, OnDestroy } from '@angular/core';

import { ChartType } from 'ng-chartist';

export interface LiveData {
  labels: string[];
  series: number[][];
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'live-chart',
  template: `
    <h4>Live Updating</h4>
    <x-chartist [data]="data" [type]="type"> </x-chartist>
  `
})
export class LiveChartComponent implements OnDestroy {
  public data: LiveData;
  public type: ChartType;

  private interval: any;

  constructor() {
    this.data = {
      labels: [],
      series: [[]]
    };
    this.type = 'Bar';

    this.interval = setInterval(() => {
      const time: Date = new Date();
      const formattedTime: string = [
        time.getHours(),
        time.getMinutes(),
        time.getSeconds()
      ].join(':');
      const random: number = getRandomInt(1, 40),
        data = this.data.series[0],
        labels = this.data.labels;

      labels.push(formattedTime);
      data.push(random);

      // We only want to display 10 data points at a time
      this.data.labels = labels.slice(-9);
      this.data.series[0] = data.slice(-9);

      this.data = Object.assign({}, this.data);
    }, 2500);
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
