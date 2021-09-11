import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
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
export type ResponsiveOptionTuple =
  Chartist.IResponsiveOptionTuple<ChartOptions>;
export type ResponsiveOptions = ResponsiveOptionTuple[];

/**
 * Represents chart events.
 */
export interface ChartEvent {
  [eventName: string]: (data: any) => void;
}

/**
 * Angular component which renders Chartist chart.
 *
 * See Chartist {@link https://gionkunz.github.io/chartist-js/api-documentation.html API documentation} and
 * {@link https://gionkunz.github.io/chartist-js/examples.html examples} for more information.
 * ### Example
 ```html
 <x-chartist
   [type]="type"
   [data]="data"
   [options]="options"
   [responsiveOptions]="responsiveOptions"
   [events]="events"
 ></x-chartist>
 ```
 */
@Component({
  selector: 'x-chartist',
  template: '',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ChartistComponent implements OnInit, OnChanges, OnDestroy {
  /**
   * The data object that needs to consist of a labels and a series array.
   */
  @Input()
  data: Chartist.IChartistData;

  /**
   * Chartist chart type.
   */
  @Input()
  type: ChartType;

  /**
   * The options object which overrides the default options.
   */
  @Input()
  options: Chartist.IChartOptions;

  /**
   * An array of responsive option arrays which are a media query and options object pair: [[mediaQueryString, optionsObject],[more...]]
   */
  @Input()
  responsiveOptions: ResponsiveOptions;

  /**
   * Events object where keys are Chartist event names and values are event handler functions.
   *
   * Supported events are: draw, optionsChanged, data, animationBegin, animationEnd, created.
   *
   * Event handler function will receive a data argument which contains event data.
   */
  @Input()
  events: ChartEvent;

  /**
   * Event emitted after Chartist chart has been initialized.
   *
   * Event handler function will receive chart instance argument.
   */
  @Output()
  initialized = new EventEmitter<ChartInterfaces>();

  chart: ChartInterfaces;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.type && this.data) {
      this.renderChart();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update(changes);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.detach();
      this.chart = null;
    }
  }

  renderChart() {
    const nativeElement = this.elementRef.nativeElement;

    if (!(this.type in Chartist)) {
      throw new Error(`${this.type} is not a valid chart type`);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Chart = Chartist[this.type];

    this.chart = new Chart(
      nativeElement,
      this.data,
      this.options,
      this.responsiveOptions
    );

    if (this.events) {
      this.bindEvents();
    }

    this.initialized.emit(this.chart);
  }

  update(changes: SimpleChanges): void {
    if (!this.type || !this.data) {
      return;
    }

    if (!this.chart || 'type' in changes) {
      this.renderChart();
    } else if (changes.data || changes.options) {
      this.chart.update(this.data, this.options);
    }
  }

  bindEvents(): void {
    for (const event of Object.keys(this.events)) {
      this.chart.on(event, this.events[event]);
    }
  }
}
