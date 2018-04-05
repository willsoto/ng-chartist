import { Component } from '@angular/core';

import * as Chartist from 'chartist';

import { ChartEvent, ChartType } from '../src/chartist.component';

declare var require: any;

const data: any = require('./data.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'demo-app',
  templateUrl: './demo.template.html'
})
export class DemoAppComponent {
  public charts: Chart[];

  constructor() {
    this.charts = [
      {
        data: data.Bar,
        type: 'Bar'
      },
      {
        data: data.Line,
        type: 'Line'
      },
      {
        data: data.Line2,
        type: 'Line'
      },
      {
        data: data.Scatter,
        options: {
          axisX: {
            labelInterpolationFnc(value: number, index: number): string | null {
              return index % 13 === 0 ? `W${value}` : null;
            }
          },
          showLine: false
        },
        responsiveOptions: [
          [
            'screen and (min-width: 640px)',
            {
              axisX: {
                labelInterpolationFnc(
                  value: number,
                  index: number
                ): string | null {
                  return index % 4 === 0 ? `W${value}` : null;
                }
              }
            }
          ]
        ],
        type: 'Line'
      },
      {
        data: data.LineWithArea,
        options: {
          low: 0,
          showArea: true
        },
        type: 'Line'
      },
      {
        data: data['Bi-PolarBar'],
        options: {
          axisX: {
            labelInterpolationFnc(value: number, index: number): number | null {
              return index % 2 === 0 ? value : null;
            }
          },
          high: 10,
          low: -10
        },
        type: 'Bar'
      },
      {
        data: data.DistributedSeries,
        options: {
          distributeSeries: true
        },
        type: 'Bar'
      },
      {
        data: data.Pie,
        options: {
          donut: true,
          donutWidth: 60,
          showLabel: false,
          startAngle: 270,
          total: 200
        },
        type: 'Pie'
      },
      {
        data: data.Pie,
        options: {
          donut: true,
          showLabel: false
        },
        type: 'Pie'
      }
    ];
  }
}
