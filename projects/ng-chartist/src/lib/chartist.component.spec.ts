import { SimpleChange } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BarChart } from "chartist";
import { ChartistComponent } from "./chartist.component";

const data = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Bar: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
    ],
  },
};

describe("chartist component", () => {
  let instance: ChartistComponent;
  let fixture: ComponentFixture<ChartistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartistComponent);
    instance = fixture.componentInstance;
  });

  it("should be initialized", () => {
    expect(fixture).toBeDefined();
    expect(instance).toBeDefined();
  });

  describe("onInit", () => {
    beforeEach(() => {
      instance.configuration = {
        type: "Bar",
        data: data["Bar"],
      };
    });

    it("should initialize the correct chart only once", () => {
      instance.ngOnInit();

      expect(instance.chart).toBeInstanceOf(BarChart);
    });

    it("should return the correct chart instance", () => {
      instance.ngOnInit();

      expect(instance.chart instanceof BarChart).toBe(true);
    });

    it("should emit initialized event when chart is initialized", () => {
      spyOn(instance.initialized, "emit").and.callThrough();
      instance.ngOnInit();

      expect(instance.initialized.emit).toHaveBeenCalled();
    });

    it("should bind events if there are events", () => {
      spyOn(instance, "bindEvents").and.callThrough();
      instance.events = {
        draw: () => {},
      };
      instance.ngOnInit();

      expect(instance.bindEvents).toHaveBeenCalled();
    });

    it("should not initialize chart when type is missing", () => {
      instance.configuration.type = undefined;

      instance.ngOnInit();

      expect(instance.chart).toBeUndefined();
    });

    it("should not initialize chart when data is missing", () => {
      instance.configuration.data = undefined;

      instance.ngOnInit();

      expect(instance.chart).toBeUndefined();
    });
  });

  describe("ngOnChanges", () => {
    beforeEach(() => {
      instance.configuration = {
        type: "Bar",
        data: data["Bar"],
      };
    });

    it("should re-render the chart if the chart type changes", () => {
      spyOn(instance, "renderChart").and.callThrough();
      instance.ngOnChanges({
        configuration: {
          currentValue: {
            ...instance.configuration,
            type: "Line",
            data: {},
          },
        } as SimpleChange,
      });

      expect(instance["renderChart"]).toHaveBeenCalled();
    });

    it("should emit initialized event when the chart type changes", () => {
      spyOn(instance.initialized, "emit").and.callThrough();
      instance.ngOnChanges({
        configuration: {
          currentValue: {
            ...instance.configuration,
            type: "Line",
            data: {},
          },
        } as SimpleChange,
      });

      expect(instance.initialized.emit).toHaveBeenCalled();
    });

    it("should update the chart if the data changes", () => {
      instance.ngOnInit();

      spyOn(instance.chart, "update").and.callThrough();
      spyOn(instance, "renderChart").and.callThrough();

      instance.ngOnChanges({
        configuration: {
          currentValue: {
            ...instance.configuration,
            data: {},
          },
        } as SimpleChange,
      });

      expect(instance.renderChart).not.toHaveBeenCalled();
      expect(instance.chart.update).toHaveBeenCalled();
    });

    it("should update the chart if the options change", () => {
      instance.ngOnInit();

      spyOn(instance.chart, "update").and.callThrough();
      spyOn(instance, "renderChart").and.callThrough();

      instance.ngOnChanges({
        configuration: {
          currentValue: {
            ...instance.configuration,
            options: {
              chartPadding: 5,
            },
          },
        } as SimpleChange,
      });

      expect(instance.renderChart).not.toHaveBeenCalled();
      expect(instance.chart.update).toHaveBeenCalled();
    });
  });
});
