# Angular Chartist

## Installation

```bash
npm install ng-chartist chartist
```

```bash
pnpm add ng-chartist chartist
```

## Usage

```typescript
import { NgModule } from "@angular/core";
import { ChartistModule } from "ng-chartist";

@NgModule({
  imports: [ChartistModule],
})
export class SomeModule {}
```

```ts
import { Component } from "@angular/core";
import { Configuration } from "ng-chartist";

@Component()
export class SomeComponent {
  public configuration: Configuration = {
    // Specify the type of chart and the rest of the config will be typed
    type: "Bar",
    // Required
    data: {},
    // Optional
    options: {},
    // Optional
    responsiveOptions: {},
  };
}
```

```html
<x-chartist [configuration]="configuration"></x-chartist>
```
