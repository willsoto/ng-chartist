import {
  Component,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

import * as Chartist from 'chartist';

/**
 * Possible chart types
 * @type {String}
 */
export type ChartType = 'Pie' | 'Bar' | 'Line';

export type ChartInterfaces = Chartist.IChartistPieChart | Chartist.IChartistBarChart | Chartist.IChartistLineChart;
export type ChartOptions = Chartist.IBarChartOptions | Chartist.ILineChartOptions | Chartist.IPieChartOptions;
export type ResponsiveOptionTuple = Chartist.IResponsiveOptionTuple<ChartOptions>;
export type ResponsiveOptions = Array<ResponsiveOptionTuple>;

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
class ChartistComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: (Promise<Chartist.IChartistData> | Chartist.IChartistData);
  @Input() type: (Promise<ChartType> | ChartType);
  @Input() options: (Promise<Chartist.IChartOptions> | Chartist.IChartOptions);
  @Input() responsiveOptions: (Promise<ResponsiveOptions> | ResponsiveOptions);
  @Input() events: ChartEvent;

  chart: ChartInterfaces;

  private element: HTMLElement;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  ngOnInit(): Promise<ChartInterfaces> {
    return this.renderChart().then((chart) => {
      if (this.events !== undefined) {
        this.bindEvents(chart);
      }

      return chart;
    });
  }

  // https://github.com/angular/angular/issues/6292
  ngOnChanges(changes: SimpleChanges): void {
    this.update(changes);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.detach();
    }
  }

  renderChart(): Promise<ChartInterfaces> {
    const promises: any[] = [
      this.type,
      this.element,
      this.data,
      this.options,
      this.responsiveOptions
    ];

    return Promise.all(promises).then((values) => {
      const [type, ...args]: any = values;

      this.chart = Chartist[type](...args);

      return this.chart;
    });
  }

  update(changes: SimpleChanges): void {
    if (!this.chart || 'type' in changes) {
      this.renderChart();
    } else {
      let data: any;
      let options: Chartist.IChartOptions;

      if (changes['data'] === undefined) {
        data = this.data;
      } else {
        data = changes['data'].currentValue;
      }

      if (changes['options'] === undefined) {
        options = this.options;
      } else {
        options = changes['options'].currentValue;
      }

      (<any>this.chart).update(data, options);
    }
  }

  bindEvents(chart: any): void {
    for (let event of Object.keys(this.events)) {
      chart.on(event, this.events[event]);
    }
  }
}

export {
  ChartistComponent
};

// for angular-cli
export default {
  directives: [ChartistComponent]
};
