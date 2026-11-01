# Angular Chartist

An Angular component for [Chartist](https://chartist.dev/).

## Installation

```bash
npm install ng-chartist chartist
```

```bash
pnpm add ng-chartist chartist
```

### Styles

Add the Chartist stylesheet to the `styles` array in `angular.json`:

```json
"styles": [
  "node_modules/chartist/dist/index.css",
  "src/styles.css"
]
```

## Version support

| ng-chartist | Angular | Chartist |
| ----------- | ------- | -------- |
| 12.x        | 18–22   | 2.x      |
| 11.x        | 18–22   | 1.x, 2.x |
| 10.x        | 18–21   | 1.x      |
| 9.x         | 16–19   | 1.x      |
| 8.x         | 12–16   | 1.x      |
| 7.x         | 12–14   | 1.x      |
| 5.x – 6.x   | 12      | 0.11.x   |
| ≤ 4.x       | ≤ 11    | 0.11.x   |

## Usage

`ChartistComponent` is standalone, so you can import it directly:

```ts
import { Component } from "@angular/core";
import { ChartistComponent, Configuration } from "ng-chartist";

@Component({
  selector: "app-bar-chart",
  imports: [ChartistComponent],
  template: `<x-chartist [configuration]="configuration" />`,
})
export class BarChartComponent {
  configuration: Configuration = {
    // The `type` determines how `data`, `options` and `responsiveOptions` are typed.
    type: "Bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      series: [
        [5, 4, 3, 7, 5, 10],
        [3, 2, 9, 5, 4, 6],
      ],
    },
    options: {
      axisX: { showGrid: false },
      height: 300,
    },
  };
}
```

If you use NgModules, import `ChartistModule` instead:

```ts
import { NgModule } from "@angular/core";
import { ChartistModule } from "ng-chartist";

@NgModule({
  imports: [ChartistModule],
})
export class SomeModule {}
```

`type` can be `"Bar"`, `"Line"` or `"Pie"`. Assigning a new `configuration` object updates the chart in place when only `data` or `options` change. Changing `type`, `responsiveOptions`, `options.on` or `options.plugins` re-creates the chart.

### Events

Chartist 2 charts emit phase events (`render`, `mount`, …). Pass listeners through `options.on`, and plugins through `options.plugins`:

```ts
configuration: Configuration = {
  type: "Line",
  data,
  options: {
    on: {
      mount: ({ elementOf, scene }) => {
        // ...
      },
    },
  },
};
```

Use `initialized` to get the chart handle, for example to listen to custom events with `on()`:

```html
<x-chartist [configuration]="configuration" (initialized)="onInitialized($event)" />
```

The 1.x events (`draw`, `created`, …) are only emitted when the `compat` plugin from `chartist/compat` is in `options.plugins`.

## License

Apache-2.0
