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
  BarChartData,
  BarChartPresetOptions,
  LineChartData,
  LineChartPresetOptions,
  PieChartData,
  PieChartPresetOptions,
  PresetHandle,
  PresetResponsiveOptions,
  barChart,
  lineChart,
  pieChart,
} from "chartist";

type ChartTypes =
  | PresetHandle<BarChartPresetOptions>
  | PresetHandle<LineChartPresetOptions>
  | PresetHandle<PieChartPresetOptions>;

export interface BarChartConfiguration {
  type: "Bar";
  data: BarChartData;
  options?: BarChartPresetOptions;
  responsiveOptions?: PresetResponsiveOptions<BarChartPresetOptions>;
}

export interface LineChartConfiguration {
  type: "Line";
  data: LineChartData;
  options?: LineChartPresetOptions;
  responsiveOptions?: PresetResponsiveOptions<LineChartPresetOptions>;
}

export interface PieChartConfiguration {
  type: "Pie";
  data: PieChartData;
  options?: PieChartPresetOptions;
  responsiveOptions?: PresetResponsiveOptions<PieChartPresetOptions>;
}

export type Configuration = BarChartConfiguration | LineChartConfiguration | PieChartConfiguration;

/**
 * Angular component which renders a Chartist chart.
 *
 * See the Chartist {@link https://chartist.dev/ documentation} for the data and options of each chart type.
 * ### Example
 ```html
 <x-chartist
   [configuration]="configuration"
   (initialized)="onInitialized($event)"
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

  @Input({ required: true })
  configuration!: Configuration;

  /**
   * Event emitted after the Chartist chart has been created.
   *
   * Event handler function will receive the chart handle, which can be used to listen to chart events with `on()`.
   */
  @Output()
  initialized = new EventEmitter<ChartTypes>();

  chart?: ChartTypes;

  ngOnInit(): void {
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes["configuration"];
    if (!change || change.firstChange || !this.chart) {
      return;
    }

    const previous = change.previousValue as Configuration;
    const next = change.currentValue as Configuration;

    // Chartist can't change the chart type, responsive options, plugins or phase listeners of an existing chart.
    if (
      previous.type !== next.type ||
      previous.responsiveOptions !== next.responsiveOptions ||
      previous.options?.plugins !== next.options?.plugins ||
      previous.options?.on !== next.options?.on
    ) {
      this.renderChart();
      return;
    }

    if (previous.data !== next.data) {
      this.chart.update({ data: next.data });
    }
    if (previous.options !== next.options) {
      (this.chart as PresetHandle<object>).setOptions(next.options ?? {}, { replace: true });
    }
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
    this.chart = undefined;
  }

  private renderChart(): void {
    this.chart?.destroy();

    const element: HTMLElement = this.elementRef.nativeElement;
    const configuration = this.configuration;

    switch (configuration.type) {
      case "Bar":
        this.chart = barChart(
          element,
          configuration.data,
          configuration.options,
          configuration.responsiveOptions,
        );
        break;
      case "Line":
        this.chart = lineChart(
          element,
          configuration.data,
          configuration.options,
          configuration.responsiveOptions,
        );
        break;
      case "Pie":
        this.chart = pieChart(
          element,
          configuration.data,
          configuration.options,
          configuration.responsiveOptions,
        );
        break;
      default:
        throw new Error(`${(configuration as { type: unknown }).type} is not a known chart type`);
    }

    this.initialized.emit(this.chart);
  }
}
