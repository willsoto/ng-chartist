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
  @Input() data: Chartist.IChartistData;
  @Input() type: ChartType;
  @Input() options: Chartist.IChartOptions;
  // TODO: give this a better type
  @Input() responsiveOptions: Chartist.IResponsiveOptionTuple<any>;

  private element: HTMLElement;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  ngOnInit() {
    console.log('ngOnInit');
    Chartist[this.type](this.element, this.data, this.options, this.responsiveOptions);
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}

export {
  ChartistComponent
};
