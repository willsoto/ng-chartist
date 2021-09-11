import { formatDate } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ChartType } from 'ng-chartist';
import { Subscription, timer } from 'rxjs';

export interface LiveData {
  labels: string[];
  series: number[][];
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'app-live-chart',
  template: `
    <h4>Live Updating</h4>
    <x-chartist [data]="data" [type]="type"> </x-chartist>
  `,
})
export class LiveChartComponent implements OnDestroy {
  public data: LiveData;
  public type: ChartType;

  private timerSubscription: Subscription;

  constructor() {
    this.data = {
      labels: [],
      series: [[]],
    };
    this.type = 'Bar';

    this.timerSubscription = timer(0, 2500).subscribe(() => this.updateData());
  }

  updateData() {
    const time: Date = new Date();
    const formattedTime = formatDate(time, 'HH:mm:ss', 'en');
    const random = getRandomInt(1, 40);
    const data = this.data.series[0];
    const labels = this.data.labels;

    labels.push(formattedTime);
    data.push(random);

    // We only want to display 10 data points at a time
    this.data.labels = labels.slice(-9);
    this.data.series[0] = data.slice(-9);

    this.data = { ...this.data };
  }

  public ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
