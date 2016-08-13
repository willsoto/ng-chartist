import {
  inject,
  async,
  TestComponentBuilder,
  ComponentFixture
} from '@angular/core/testing';

import * as Chartist from 'chartist';

import { ChartistComponent, ChartType } from '../src/chartist.component';

const data: any = require('./data.json');

describe('chartist component', function(): void {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], function(tcb: any): void {
    builder = tcb;
  }));

  it('should initialize the correct chart only once', async(() => {
    builder.createAsync(ChartistComponent).then((fixture: ComponentFixture<ChartistComponent>) => {
      const instance: ChartistComponent = fixture.componentInstance;
      const chartType: ChartType = 'Bar';

      spyOn(Chartist, chartType).and.callThrough();

      instance.data = data[chartType];
      instance.type = chartType;

      instance.renderChart().then(function(): void {
        expect(Chartist.Bar).toHaveBeenCalledTimes(1);
      });
    });
  }));

  it('should return the correct chart instance', async(() => {
    builder.createAsync(ChartistComponent).then((fixture: ComponentFixture<ChartistComponent>) => {
      const instance: ChartistComponent = fixture.componentInstance;
      const chartType: ChartType = 'Bar';

      instance.data = data[chartType];
      instance.type = chartType;

      instance.renderChart().then(function(chart: any): void {
        expect(chart instanceof Chartist.Bar).toBe(true);
      });
    });
  }));

  it('should bind events if there are events', async(() => {
    builder.createAsync(ChartistComponent).then((fixture: ComponentFixture<ChartistComponent>) => {
      const instance: ChartistComponent = fixture.componentInstance;
      const chartType: ChartType = 'Bar';

      spyOn(instance, 'bindEvents').and.callThrough();

      instance.data = data[chartType];
      instance.type = chartType;
      instance.events = {
        draw(): boolean {
          return false;
        }
      };

      fixture.detectChanges();

      instance.ngOnInit().then(function(): void {
        expect(instance.bindEvents).toHaveBeenCalled();
      });
    });
  }));

  it('should re-render the chart if the chart type changes', async(() => {
    builder.createAsync(ChartistComponent).then((fixture: ComponentFixture<ChartistComponent>) => {
      const instance: ChartistComponent = fixture.componentInstance;
      const changes: any = {
        type: 'Bar'
      };

      instance.type = 'Line';

      spyOn(instance, 'renderChart').and.callThrough();

      instance.update(changes);

      expect(instance.renderChart).toHaveBeenCalled();
    });
  }));

  it('should update the chart if the data changes', async(() => {
    builder.createAsync(ChartistComponent).then((fixture: ComponentFixture<ChartistComponent>) => {
      const instance: ChartistComponent = fixture.componentInstance;
      const changes: any = {
        data: {
          labels: [],
          series: []
        }
      };

      instance.data = data['Bar'];
      instance.type = 'Bar';

      fixture.detectChanges();

      instance.renderChart().then(function(): void {
        instance.data = data['Line'];
        instance.type = 'Line';

        spyOn(instance.chart, 'update').and.callThrough();
        spyOn(instance, 'renderChart').and.callThrough();

        fixture.detectChanges();

        instance.update(changes);

        expect(instance.renderChart).not.toHaveBeenCalled();
        expect(instance.chart.update).toHaveBeenCalled();
      });
    });
  }));

  it('should update the chart if the options change', async(() => {
    builder.createAsync(ChartistComponent).then((fixture: ComponentFixture<ChartistComponent>) => {
      const instance: ChartistComponent = fixture.componentInstance;
      const changes: any = {
        options: {
          reverseData: true
        }
      };

      instance.data = data['Bar'];
      instance.type = 'Bar';

      fixture.detectChanges();

      instance.renderChart().then(function(): void {
        instance.data = data['Bar'];
        instance.type = 'Bar';

        spyOn(instance.chart, 'update').and.callThrough();
        spyOn(instance, 'renderChart').and.callThrough();

        fixture.detectChanges();

        instance.update(changes);

        expect(instance.renderChart).not.toHaveBeenCalled();
        expect(instance.chart.update).toHaveBeenCalled();
      });
    });
  }));
});
