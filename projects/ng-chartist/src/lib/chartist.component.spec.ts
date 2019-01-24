import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as Chartist from 'chartist';

import { ChartistComponent, ChartType } from './chartist.component';

const data: any = require('./testdata.json');

describe('chartist component', () => {
  let instance: ChartistComponent;
  let fixture: ComponentFixture<ChartistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartistComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartistComponent);
    instance = fixture.componentInstance;
  });

  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(instance).toBeDefined();
  });

  describe('ON INIT', () => {
    const chartType: ChartType = 'Bar';

    beforeEach(() => {
      instance.data = data[chartType];
      instance.type = chartType;
    });

    it('should initialize the correct chart only once', () => {
      spyOn(Chartist, chartType).and.callThrough();
      instance.ngOnInit();

      expect(Chartist[chartType]).toHaveBeenCalledTimes(1);
    });

    it('should return the correct chart instance', () => {
      instance.ngOnInit();

      expect(instance['chart'] instanceof Chartist[chartType]).toBe(true);
    });

    it('should emit initialized event when chart is initialized', () => {
      spyOn(<any>instance.initialized, 'emit').and.callThrough();
      instance.ngOnInit();

      expect(instance.initialized.emit).toHaveBeenCalled();
    });

    it('should bind events if there are events', () => {
      spyOn(<any>instance, 'bindEvents').and.callThrough();
      instance.events = {
        draw: () => {}
      };
      instance.ngOnInit();

      expect(instance['bindEvents']).toHaveBeenCalled();
    });

    it('should not initialize chart when type is missing', () => {
      instance.type = undefined;

      instance.ngOnInit();

      expect(instance['chart']).toBeUndefined();
    });

    it('should not initialize chart when data is missing', () => {
      instance.data = undefined;

      instance.ngOnInit();

      expect(instance['chart']).toBeUndefined();
    });
  });

  describe('ON CHANGES', () => {
    const chartType: ChartType = 'Bar';

    beforeEach(() => {
      instance.data = data[chartType];
      instance.type = chartType;
    });

    it('should re-render the chart if the chart type changes', () => {
      spyOn(<any>instance, 'renderChart').and.callThrough();
      instance.ngOnChanges({
        type: <any>{
          currentValue: instance.type
        }
      });

      expect(instance['renderChart']).toHaveBeenCalled();
    });

    it('should emit initialized event when the chart type changes', () => {
      spyOn(<any>instance.initialized, 'emit').and.callThrough();
      instance.ngOnChanges({
        type: <any>{
          currentValue: instance.type
        }
      });

      expect(instance.initialized.emit).toHaveBeenCalled();
    });

    it('should update the chart if the data changes', () => {
      instance.ngOnInit();

      spyOn(instance['chart'], 'update').and.callThrough();
      spyOn(<any>instance, 'renderChart').and.callThrough();

      instance.ngOnChanges({
        data: <any>{
          currentValue: instance.data
        }
      });

      expect(instance['renderChart']).not.toHaveBeenCalled();
      expect(instance['chart'].update).toHaveBeenCalled();
    });

    it('should update the chart if the options change', () => {
      instance.ngOnInit();

      spyOn(instance['chart'], 'update').and.callThrough();
      spyOn(<any>instance, 'renderChart').and.callThrough();

      instance.options = {
        reverseData: true
      };
      instance.ngOnChanges({
        options: <any>{
          currentValue: instance.options
        }
      });

      expect(instance['renderChart']).not.toHaveBeenCalled();
      expect(instance['chart'].update).toHaveBeenCalled();
    });
  });
});
