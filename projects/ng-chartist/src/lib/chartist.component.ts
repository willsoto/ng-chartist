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
  inject,
} from "@angular/core";
import {
  BarChart,
  BarChartData,
  BarChartOptions,
  LineChart,
  LineChartData,
  LineChartOptions,
  PieChart,
  PieChartData,
  PieChartOptions,
  ResponsiveOptions,
} from "chartist";

type ChartTypes = BarChart | LineChart | PieChart;

export interface BarChartConfiguration {
  type: "Bar";
  data: BarChartData;
  options?: BarChartOptions;
  responsiveOptions?: ResponsiveOptions<BarChartOptions>;
}

export interface LineChartConfiguration {
  type: "Line";
  data: LineChartData;
  options?: LineChartOptions;
  responsiveOptions?: ResponsiveOptions<LineChartOptions>;
}

export interface PieChartConfiguration {
  type: "Pie";
  data: PieChartData;
  options?: PieChartOptions;
  responsiveOptions?: ResponsiveOptions<PieChartOptions>;
}

export type Configuration =
  | BarChartConfiguration
  | LineChartConfiguration
  | PieChartConfiguration;

/**
 * Represents chart events.
 */
export interface ChartEvent {
  [eventName: string]: (data: unknown) => void;
}

/**
 * Angular component which renders Chartist chart.
 *
 * See Chartist {@link https://gionkunz.github.io/chartist-js/api-documentation.html API documentation} and
 * {@link https://gionkunz.github.io/chartist-js/examples.html examples} for more information.
 * ### Example
 ```html
 <x-chartist
   [configuration]="configuration"
   [events]="events"
 ></x-chartist>
 ```
 */
@Component({
  selector: "x-chartist",
  template: "",
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ChartistComponent implements OnInit, OnChanges, OnDestroy {
  private elementRef = inject(ElementRef);

  @Input()
  configuration!: Configuration;

  /**
   * Events object where keys are Chartist event names and values are event handler functions.
   *
   * Supported events are: draw, optionsChanged, data, animationBegin, animationEnd, created.
   *
   * Event handler function will receive a data argument which contains event data.
   */
  @Input()
  events?: ChartEvent;

  /**
   * Event emitted after Chartist chart has been initialized.
   *
   * Event handler function will receive chart instance argument.
   */
  @Output()
  initialized = new EventEmitter<ChartTypes>();

  chart?: ChartTypes;

  ngOnInit(): void {
    if (this.configuration.type && this.configuration.data) {
      this.renderChart();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update(changes);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.detach();
      this.chart = undefined;
    }
  }

  renderChart() {
    const nativeElement = this.elementRef.nativeElement;
    const { type, data, options, responsiveOptions } = this.configuration;

    let chart: ChartTypes;
    if (type === "Bar") {
      chart = new BarChart(nativeElement, data, options, responsiveOptions);
    } else if (type === "Line") {
      chart = new LineChart(nativeElement, data, options, responsiveOptions);
    } else if (type === "Pie") {
      chart = new PieChart(nativeElement, data, options, responsiveOptions);
    } else {
      throw new Error(`${type} is not a known chart type`);
    }

    this.chart = chart;

    if (this.events) {
      this.bindEvents(chart, this.events);
    }

    this.initialized.emit(chart);
  }

  update(changes: SimpleChanges): void {
    const { type, data, options } = this.configuration;

    if (!type || !data) {
      return;
    }

    const changedConfiguration = changes.configuration
      .currentValue as Configuration;

    if (!this.chart || changedConfiguration.type !== type) {
      this.renderChart();
    } else if (
      "data" in changedConfiguration ||
      "options" in changedConfiguration
    ) {
      this.chart.update(data, options);
    }
  }

  bindEvents(chart: ChartTypes, events: ChartEvent): void {
    for (const event of Object.keys(events)) {
      chart.on(event, events[event]);
    }
  }
}
