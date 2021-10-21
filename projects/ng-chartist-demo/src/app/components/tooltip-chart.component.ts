import { Component } from "@angular/core";
import { IChartistData, ILineChartOptions } from "chartist";
import ChartistTooltip from "chartist-plugin-tooltips-updated";
import { ChartType } from "ng-chartist";

/**
 * Following example shows how to use updated version of Chartist tooltip plugin with ng-chartist
 * More information about the plugin can be found on github:
 * https://github.com/LukBukkit/chartist-plugin-tooltip
 */
@Component({
  selector: "app-tooltip-chart",
  template: `
    <h4>Tooltips</h4>
    <x-chartist [data]="data" [type]="type" [options]="options"> </x-chartist>
  `,
})
export class TooltipChartComponent {
  type: ChartType = "Line";
  data: IChartistData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6],
    ],
  };
  options: ILineChartOptions = {
    plugins: [
      ChartistTooltip({
        anchorToPoint: true,
        appendToBody: true,
      }),
    ],
  };
}
