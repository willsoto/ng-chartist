import {
  describe,
  it,
  expect,
  beforeEach,
  inject,
  async
} from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import * as Chartist from 'chartist';

import { ChartistComponent } from './../angular2-chartist';

describe('chartist component', function() {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], function(tcb) {
    builder = tcb;
  }));

  it('should initialize the correct chart', async(() => {
    builder.createAsync(ChartistComponent).then((fixture: ComponentFixture<ChartistComponent>) => {
      spyOn(Chartist, 'Bar').and.callThrough();

      fixture.componentInstance.data = {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        series: [
          [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
          [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
      };
      fixture.componentInstance.type = 'Bar';

      fixture.detectChanges();

      expect(Chartist.Bar).toHaveBeenCalled();
    });
  }));
});
