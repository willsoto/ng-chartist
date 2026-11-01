import { Component, SimpleChange, signal } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BarChart, LineChart, PieChart } from "chartist";
import { compat } from "chartist/compat";

import { ChartEvent, ChartistComponent, Configuration } from "./chartist.component";

const data = {
  Bar: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
      imports: [ChartistComponent],
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
      vi.spyOn(instance.initialized, "emit");
      instance.ngOnInit();

      expect(instance.initialized.emit).toHaveBeenCalled();
    });

    it("should bind events if there are events", () => {
      vi.spyOn(instance, "bindEvents");
      instance.events = {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        draw: () => {},
      };
      instance.ngOnInit();

      expect(instance.bindEvents).toHaveBeenCalled();
    });

    it("should not initialize chart when type is missing", () => {
      instance.configuration = {
        data: data["Bar"],
      } as unknown as Configuration;

      instance.ngOnInit();

      expect(instance.chart).toBeUndefined();
    });

    it("should not initialize chart when data is missing", () => {
      instance.configuration = {
        type: "Bar",
      } as unknown as Configuration;

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
      vi.spyOn(instance, "renderChart");
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
      vi.spyOn(instance.initialized, "emit");
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

      vi.spyOn(instance.chart!, "update");
      vi.spyOn(instance, "renderChart");

      instance.ngOnChanges({
        configuration: {
          currentValue: {
            ...instance.configuration,
            data: {},
          },
        } as SimpleChange,
      });

      expect(instance.renderChart).not.toHaveBeenCalled();
      expect(instance.chart!.update).toHaveBeenCalled();
    });

    it("should update the chart if the options change", () => {
      instance.ngOnInit();

      vi.spyOn(instance.chart!, "update");
      vi.spyOn(instance, "renderChart");

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
      expect(instance.chart!.update).toHaveBeenCalled();
    });
  });

  it("should throw for an unknown chart type", () => {
    instance.configuration = {
      type: "Donut",
      data: data["Bar"],
    } as unknown as Configuration;

    expect(() => instance.ngOnInit()).toThrow("Donut is not a known chart type");
  });
});

@Component({
  imports: [ChartistComponent],
  template: `<x-chartist [configuration]="configuration()" [events]="events" />`,
})
class HostComponent {
  configuration = signal<Configuration>({ type: "Bar", data: data["Bar"] });
  events?: ChartEvent;
}

describe("chartist component in a host template", () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  function chartist(): ChartistComponent {
    return fixture.debugElement.children[0].componentInstance;
  }

  function svg(): SVGElement | null {
    return fixture.nativeElement.querySelector("x-chartist > svg");
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
  });

  it.each([
    { type: "Bar", chartClass: BarChart, data: data["Bar"] },
    { type: "Line", chartClass: LineChart, data: data["Bar"] },
    { type: "Pie", chartClass: PieChart, data: { series: [5, 3, 4] } },
  ] as const)(
    "should render a $type chart into the host element",
    async ({ type, chartClass, data }) => {
      host.configuration.set({ type, data } as Configuration);
      await fixture.whenStable();

      expect(chartist().chart).toBeInstanceOf(chartClass);
      await vi.waitFor(() => expect(svg()?.classList).toContain(`ct-chart-${type.toLowerCase()}`));
    },
  );

  // Chartist 2 only emits the 1.x event names when the compat plugin is installed.
  it("should forward chart events to the bound handlers", async () => {
    const created = vi.fn();
    host.events = { created };
    host.configuration.set({ type: "Bar", data: data["Bar"], options: { plugins: [compat] } });
    await fixture.whenStable();

    await vi.waitFor(() => expect(created).toHaveBeenCalled());
  });

  it("should update the existing chart when data changes", async () => {
    const onData = vi.fn();
    host.events = { data: onData };
    host.configuration.set({ type: "Bar", data: data["Bar"], options: { plugins: [compat] } });
    await fixture.whenStable();
    await vi.waitFor(() => expect(svg()).not.toBeNull());

    const chart = chartist().chart;
    const nextData = { labels: ["Jan"], series: [[1]] };
    host.configuration.set({ type: "Bar", data: nextData, options: { plugins: [compat] } });
    await fixture.whenStable();

    expect(chartist().chart).toBe(chart);
    expect(onData).toHaveBeenLastCalledWith({ type: "update", data: nextData });
  });

  it("should detach the chart when destroyed", async () => {
    await fixture.whenStable();
    const component = chartist();
    const detach = vi.spyOn(component.chart!, "detach");

    fixture.destroy();

    expect(detach).toHaveBeenCalled();
    expect(component.chart).toBeUndefined();
  });
});
