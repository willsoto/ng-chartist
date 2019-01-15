import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as Chartist from 'chartist';

import { ChartistComponent, ChartType } from './chartist.component';

const data: any = require('./testdata.json');

describe('chartist component', function(): void {
  let instance: ChartistComponent;
  let fixture: ComponentFixture<ChartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartistComponent]
    }).compileComponents();
  }));

  beforeEach(function(): void {
    fixture = TestBed.createComponent(ChartistComponent);
    instance = fixture.debugElement.componentInstance;
  });

  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(instance).toBeDefined();
  });

  it('should initialize the correct chart only once', async function() {
    const chartType: ChartType = 'Bar';

    spyOn(Chartist, chartType).and.callThrough();

    instance.data = data[chartType];
    instance.type = chartType;

    await instance['renderChart']();

    expect(Chartist.Bar).toHaveBeenCalledTimes(1);
  });

  it('should return the correct chart instance', async function() {
    const chartType: ChartType = 'Bar';

    instance.data = data[chartType];
    instance.type = chartType;

    const chart = await instance['renderChart']();

    expect(chart instanceof Chartist.Bar).toBe(true);
  });

  it('should bind events if there are events', async function() {
    const chartType: ChartType = 'Bar';

    spyOn(<any>instance, 'bindEvents').and.callThrough();

    instance.data = data[chartType];
    instance.type = chartType;
    instance.events = {
      draw(): boolean {
        return false;
      }
    };

    await instance.ngOnInit();

    expect(instance['bindEvents']).toHaveBeenCalled();
  });

  it('should re-render the chart if the chart type changes', function(): void {
    const changes: any = {
      type: 'Bar'
    };

    instance.type = 'Line';

    spyOn(<any>instance, 'renderChart').and.callThrough();

    instance['update'](changes);

    expect(instance['renderChart']).toHaveBeenCalled();
  });

  it('should update the chart if the data changes', async function() {
    const changes: any = {
      data: {
        labels: [],
        series: []
      }
    };

    instance.data = data.Bar;
    instance.type = 'Bar';

    fixture.detectChanges();

    await instance['renderChart']();

    instance.data = data.Line;
    instance.type = 'Line';

    spyOn(instance.chart, 'update').and.callThrough();
    spyOn(<any>instance, 'renderChart').and.callThrough();

    fixture.detectChanges();

    instance['update'](changes);

    expect(instance['renderChart']).not.toHaveBeenCalled();
    expect(instance.chart.update).toHaveBeenCalled();
  });

  it('should update the chart if the options change', async function() {
    const changes: any = {
      options: {
        reverseData: true
      }
    };

    instance.data = data.Bar;
    instance.type = 'Bar';

    fixture.detectChanges();

    await instance['renderChart']();

    instance.data = data.Bar;
    instance.type = 'Bar';

    spyOn(instance.chart, 'update').and.callThrough();
    spyOn(<any>instance, 'renderChart').and.callThrough();

    fixture.detectChanges();

    instance['update'](changes);

    expect(instance['renderChart']).not.toHaveBeenCalled();
    expect(instance.chart.update).toHaveBeenCalled();
  });

  it('should throw an error when missing type', function(): void {
    instance.data = data.Bar;

    expect(instance.ngOnInit).toThrow();
  });

  it('should throw an error when missing data', function(): void {
    instance.type = 'Bar';

    expect(instance.ngOnInit).toThrow();
  });
});
