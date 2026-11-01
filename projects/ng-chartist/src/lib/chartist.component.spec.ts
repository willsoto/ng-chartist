import { Component, signal } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ChartistComponent, Configuration } from "./chartist.component";

const barData = {
  labels: ["Jan", "Feb", "Mar"],
  series: [[5, 4, 3]],
};

@Component({
  imports: [ChartistComponent],
  template: `<x-chartist [configuration]="configuration()" (initialized)="initialized($event)" />`,
})
class HostComponent {
  configuration = signal<Configuration>({ type: "Bar", data: barData });
  initialized = vi.fn();
}

describe("ChartistComponent", () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  function chartist(): ChartistComponent {
    return fixture.debugElement.children[0].componentInstance;
  }

  function query(selector: string): Element[] {
    return Array.from(fixture.nativeElement.querySelectorAll(`x-chartist ${selector}`));
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
  });

  it.each([
    { type: "Bar", data: barData },
    { type: "Line", data: barData },
    { type: "Pie", data: { labels: ["A", "B", "C"], series: [5, 3, 4] } },
  ] as const)("should render a $type chart", async (configuration) => {
    host.configuration.set(configuration as Configuration);
    await fixture.whenStable();

    const svgs = query("> svg");
    expect(svgs).toHaveLength(1);
    expect(svgs[0].classList).toContain(`ct-chart-${configuration.type.toLowerCase()}`);
  });

  it("should create the chart once and emit it", async () => {
    await fixture.whenStable();

    expect(host.initialized).toHaveBeenCalledOnce();
    expect(host.initialized).toHaveBeenCalledWith(chartist().chart);
  });

  it("should update the existing chart when data changes", async () => {
    await fixture.whenStable();
    expect(query(".ct-bar")).toHaveLength(3);

    host.configuration.set({
      type: "Bar",
      data: { labels: ["A", "B", "C", "D", "E"], series: [[1, 2, 3, 4, 5]] },
    });
    await fixture.whenStable();

    expect(query(".ct-bar")).toHaveLength(5);
    expect(host.initialized).toHaveBeenCalledOnce();
  });

  it("should update the existing chart when options change", async () => {
    host.configuration.set({ type: "Line", data: barData });
    await fixture.whenStable();
    expect(query(".ct-point")).toHaveLength(3);
    host.initialized.mockClear();

    host.configuration.set({ type: "Line", data: barData, options: { showPoint: false } });
    await fixture.whenStable();

    expect(query(".ct-point")).toHaveLength(0);
    expect(host.initialized).not.toHaveBeenCalled();
  });

  it("should replace the chart when the type changes", async () => {
    await fixture.whenStable();
    const barChart = chartist().chart;

    host.configuration.set({ type: "Line", data: barData });
    await fixture.whenStable();

    const svgs = query("> svg");
    expect(svgs).toHaveLength(1);
    expect(svgs[0].classList).toContain("ct-chart-line");
    expect(chartist().chart).not.toBe(barChart);
    expect(host.initialized).toHaveBeenLastCalledWith(chartist().chart);
  });

  it("should pass phase listeners to the chart", async () => {
    const render = vi.fn();
    host.configuration.set({ type: "Bar", data: barData, options: { on: { render } } });
    await fixture.whenStable();

    expect(render).toHaveBeenCalled();
  });

  it("should replace the chart when phase listeners change", async () => {
    await fixture.whenStable();
    const render = vi.fn();

    host.configuration.set({ type: "Bar", data: barData, options: { on: { render } } });
    await fixture.whenStable();

    expect(render).toHaveBeenCalled();
    expect(host.initialized).toHaveBeenCalledTimes(2);
  });

  it("should remove the chart when destroyed", async () => {
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement.querySelector("x-chartist");
    const component = chartist();

    fixture.destroy();

    expect(element.querySelector("svg")).toBeNull();
    expect(component.chart).toBeUndefined();
  });

  it("should throw for an unknown chart type", () => {
    const fixture = TestBed.createComponent(ChartistComponent);
    fixture.componentRef.setInput("configuration", { type: "Donut", data: barData });

    expect(() => fixture.detectChanges()).toThrow("Donut is not a known chart type");
  });
});
