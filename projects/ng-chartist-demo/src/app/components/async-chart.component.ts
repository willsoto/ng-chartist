import { Component } from "@angular/core";
import * as Chartist from "chartist";
import { ChartType } from "ng-chartist";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { getRandomInt } from "./live-chart.component";

declare let require: any;

const data: any = require("../data.json");

@Component({
  selector: "app-async-chart",
  template: `
    <h4>Async</h4>
    <x-chartist [data]="data$ | async" [type]="type$ | async"> </x-chartist>
  `,
})
export class AsyncChartComponent {
  data$: Observable<Chartist.IChartistData>;
  type$: Observable<ChartType>;

  constructor() {
    const chartType: ChartType = "Pie";
    // simulate slow API call
    this.data$ = of(data.Pie).pipe(delay(getRandomInt(1000, 3000)));
    this.type$ = of(chartType).pipe(delay(getRandomInt(1000, 3000)));
  }
}
