import {
  Component,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  OnDestroy
} from '@angular/core';

import * as Chartist from 'chartist';

export type ChartType = 'Pie' | 'Bar' | 'Line';

@Component({
  selector: 'chartist',
  template: '<ng-content></ng-content>'
})
class ChartistComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: (Promise<Chartist.IChartistData> | Chartist.IChartistData);
  @Input() type: (Promise<ChartType> | ChartType);
  @Input() options: (Promise<Chartist.IChartOptions> | Chartist.IChartOptions);
  // TODO: give this a better type
  @Input() responsiveOptions: (Promise<Chartist.IResponsiveOptionTuple<any>> | Chartist.IResponsiveOptionTuple<any>);

  private element: HTMLElement;
  private chart: (Chartist.IChartistPieChart | Chartist.IChartistBarChart | Chartist.IChartistLineChart);

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
    this.renderChart();
  }

  // https://github.com/angular/angular/issues/6292
  ngOnChanges(changeRecord: any): void {
    console.log('ngOnChanges', changeRecord);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  private renderChart(): void {
    const promises: any[] = [
      this.type,
      this.element,
      this.data,
      this.options,
      this.responsiveOptions
    ];

    Promise.all(promises).then((values) => {
      const [type, ...args]: any = values;

      this.chart = Chartist[type](...args);
    });
  }
}

export {
  ChartistComponent
};
