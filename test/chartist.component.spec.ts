import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as Chartist from 'chartist';

import { ChartType, ChartistComponent } from '../src/chartist.component';

const data: any = require('./data.json');

describe('chartist component', function(): void {
  let instance: ChartistComponent;
  let fixture: ComponentFixture<ChartistComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ChartistComponent]
      }).compileComponents();
    })
  );

  beforeEach(function(): void {
    fixture = TestBed.createComponent(ChartistComponent);
    instance = fixture.componentInstance;

    fixture.detectChanges();
  });

  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(instance).toBeDefined();
  });

  it('should initialize the correct chart only once', function(): void {
    let chartType: ChartType = 'Bar';

    spyOn(Chartist, chartType).and.callThrough();

    instance.data = data[chartType];
    instance.type = chartType;

    fixture.detectChanges();

    instance.renderChart().then(function(): void {
      expect(Chartist.Bar).toHaveBeenCalledTimes(1);
    });
  });

  it('should return the correct chart instance', function(): void {
    let chartType: ChartType = 'Bar';

    instance.data = data[chartType];
    instance.type = chartType;

    instance.renderChart().then(function(chart: any): void {
      expect(chart instanceof Chartist.Bar).toBe(true);
    });
  });

  it('should bind events if there are events', function(): void {
    let chartType: ChartType = 'Bar';

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

  it('should re-render the chart if the chart type changes', function(): void {
    const changes: any = {
      type: 'Bar'
    };

    instance.type = 'Line';

    spyOn(instance, 'renderChart').and.callThrough();

    instance.update(changes);

    expect(instance.renderChart).toHaveBeenCalled();
  });

  it('should update the chart if the data changes', function(): void {
    let changes: any = {
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

  it('should update the chart if the options change', function(): void {
    let changes: any = {
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

  it('should throw an error when missing type', function(): void {
    instance.data = data['Bar'];

    expect(instance.ngOnInit).toThrow();
  });

  it('should throw an error when missing data', function(): void {
    instance.type = 'Bar';

    expect(instance.ngOnInit).toThrow();
  });

  it('should throw an error when an invalid chart type is passed', function() {
    instance.data = data['Bar'];
    instance.type = 'NotAChart';

    instance.renderChart().catch(err => {
      expect(err.message).toBe('NotAChart is not a valid chart type');
    });
  });
});
