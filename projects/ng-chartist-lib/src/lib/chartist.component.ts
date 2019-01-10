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
  // @ts-ignore
  public data: Promise<Chartist.IChartistData> | Chartist.IChartistData;

  // @ts-ignore
  @Input() public type: Promise<ChartType> | ChartType;

  @Input()
  // @ts-ignore
  public options: Promise<Chartist.IChartOptions> | Chartist.IChartOptions;

  @Input()
  // @ts-ignore
  public responsiveOptions: Promise<ResponsiveOptions> | ResponsiveOptions;

  // @ts-ignore
  @Input() public events: ChartEvent;

  // @ts-ignore
  public chart: ChartInterfaces;

  private element: HTMLElement;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  public ngOnInit(): Promise<ChartInterfaces> {
    if (!this.type || !this.data) {
      Promise.reject('Expected at least type and data.');
    }

    return this.renderChart().then((chart) => {
      if (this.events !== undefined) {
        this.bindEvents(chart);
      }

      return chart;
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.update(changes);
  }

  public ngOnDestroy(): void {
    if (this.chart) {
      this.chart.detach();
    }
  }

  public renderChart(): Promise<ChartInterfaces> {
    const promises: any[] = [
      this.type,
      this.element,
      this.data,
      this.options,
      this.responsiveOptions
    ];

    return Promise.all(promises).then((values) => {
      const [type, ...args]: any = values;

      if (!(type in Chartist)) {
        throw new Error(`${type} is not a valid chart type`);
      }

      this.chart = (Chartist as any)[type](...args);

      return this.chart;
    });
  }

  public update(changes: SimpleChanges): void {
    if (!this.chart || 'type' in changes) {
      this.renderChart();
    } else {
      if (changes.data) {
        this.data = changes.data.currentValue;
      }

      if (changes.options) {
        this.options = changes.options.currentValue;
      }

      (this.chart as any).update(this.data, this.options);
    }
  }

  public bindEvents(chart: any): void {
    for (const event of Object.keys(this.events)) {
      chart.on(event, this.events[event]);
    }
  }
}
