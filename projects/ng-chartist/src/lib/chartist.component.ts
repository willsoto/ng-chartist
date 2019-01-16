import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

import * as Chartist from 'chartist';
import { IChartistBase, IChartOptions } from 'chartist';

/**
 * Possible chart types
 */
export type ChartType = 'Pie' | 'Bar' | 'Line';

export type ChartInterfaces =
  | Chartist.IChartistPieChart
  | Chartist.IChartistBarChart
  | Chartist.IChartistLineChart;
export type ChartOptions =
  | Chartist.IBarChartOptions
  | Chartist.ILineChartOptions
  | Chartist.IPieChartOptions;
export type ResponsiveOptionTuple = Chartist.IResponsiveOptionTuple<
  ChartOptions
>;
export type ResponsiveOptions = ResponsiveOptionTuple[];

/**
 * Represent a chart event.
 * For possible values, check the Chartist docs.
 */
export interface ChartEvent {
  [eventName: string]: (data: any) => void;
}

@Component({
  selector: 'x-chartist',
  template: '<ng-content></ng-content>'
})
export class ChartistComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  data: Chartist.IChartistData;

  @Input()
  type: ChartType;

  @Input()
  options: Chartist.IChartOptions;

  @Input()
  responsiveOptions: ResponsiveOptions;

  @Input()
  events: ChartEvent;

  public chart: ChartInterfaces;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.type && this.data) {
      this.renderChart();
      if (this.events) {
        this.bindEvents();
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update(changes);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.detach();
    }
  }

  private renderChart() {
    const nativeElement = this.elementRef.nativeElement;

    if (!(this.type in Chartist)) {
      throw new Error(`${this.type} is not a valid chart type`);
    }

    this.chart = (<any>Chartist)[this.type](
      nativeElement,
      this.data,
      this.options,
      this.responsiveOptions
    );
  }

  private update(changes: SimpleChanges): void {
    if (!this.type || !this.data) {
      return;
    }

    if (!this.chart || 'type' in changes) {
      this.renderChart();
    } else if (changes.data || changes.options) {
      (<IChartistBase<IChartOptions>>this.chart).update(
        this.data,
        this.options
      );
    }
  }

  private bindEvents(): void {
    for (const event of Object.keys(this.events)) {
      this.chart.on(event, this.events[event]);
    }
  }
}
