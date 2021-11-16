# Angular Chartist

## Demo

[https://willsoto.github.io/ng-chartist/demo/](https://willsoto.github.io/ng-chartist/demo/index.html)

## Docs

[https://willsoto.github.io/ng-chartist/docs/](https://willsoto.github.io/ng-chartist/docs/)

## Angular Version Support

| Angular | ng-chartist |
| ------- | ----------- |
| 12x     | 5x          |
| <=11x   | 4x          |

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Chartist component for Angular 4+

## Installation

### yarn

```bash
# install ng-chartist and chartist
yarn add ng-chartist chartist

# install chartist typings
yarn add --dev @types/chartist
```

### npm

```bash
# install ng-chartist and chartist
npm i --save ng-chartist chartist

# install chartist typings
npm i --save-dev @types/chartist
```

### Add Chartist CSS styles to your application:

Add to styles section in `angular.json` file:

```json
"styles": [
  "node_modules/chartist/dist/chartist.css",
  "src/style.scss"
],
```

### Usage

```typescript
// app.module.ts
import { ChartistModule } from "ng-chartist";

@NgModule({
  imports: [
    ChartistModule, // add ChartistModule to your imports
  ],
})
export class AppModule {}
```

```typescript
// bar-chart.component.ts
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

@Component({
  selector: 'app-bar-chart',
  template: `
    <x-chartist
      [type]="type"
      [data]="data"
      [options]="options"
      [events]="events"
    ></x-chartist>
  `
  ]
})
export class BarChartComponent {
  type: ChartType = 'Bar';
  data: IChartistData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  };

  options: IBarChartOptions = {
    axisX: {
      showGrid: false
    },
    height: 300
  };

  events: ChartEvent = {
    draw: (data) => {
      if (data.type === 'bar') {
        data.element.animate({
          y2: <IChartistAnimationOptions>{
            dur: '0.5s',
            from: data.y1,
            to: data.y2,
            easing: 'easeOutQuad'
          }
        });
      }
    }
  };
}
```

You may also find it useful to view the [demo source](https://github.com/willsoto/ng-chartist/blob/master/projects/ng-chartist-demo/src/app/app.component.ts).

## License

Apache-2.0
