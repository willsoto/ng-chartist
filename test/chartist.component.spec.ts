import {
  describe,
  it,
  expect,
  beforeEach,
  inject,
  async
} from '@angular/core/testing';

import {
  TestComponentBuilder,
  ComponentFixture
} from '@angular/compiler/testing';

import * as Chartist from 'chartist';

import { ChartistComponent } from './../angular2-chartist';

const data: any = require('./data.json');

describe('chartist component', function() {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], function(tcb) {
    builder = tcb;
  }));

  it('should initialize the correct chart only once', async(() => {
    builder.createAsync(ChartistComponent).then((fixture: ComponentFixture<ChartistComponent>) => {
      const chartType = 'Bar';

      spyOn(Chartist, chartType).and.callThrough();

      fixture.componentInstance.data = data[chartType];
      fixture.componentInstance.type = chartType;

      fixture.componentInstance.renderChart().then(function() {
        expect(Chartist.Bar).toHaveBeenCalledTimes(1);
      });
    });
  }));

  it('should return the correct chart instance', async(() => {
    builder.createAsync(ChartistComponent).then((fixture: ComponentFixture<ChartistComponent>) => {
      const chartType = 'Bar';

      fixture.componentInstance.data = data[chartType];
      fixture.componentInstance.type = chartType;

      fixture.componentInstance.renderChart().then(function(chart) {
        expect(chart instanceof Chartist.Bar).toBe(true);
      });
    });
  }));
});
