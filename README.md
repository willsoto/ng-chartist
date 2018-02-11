# Angular Chartist

[![Greenkeeper badge](https://badges.greenkeeper.io/willsoto/ng-chartist.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ng-chartist.svg)](http://badge.fury.io/js/ng-chartist)
[![CircleCI](https://circleci.com/gh/willsoto/ng-chartist.svg?style=svg)](https://circleci.com/gh/willsoto/ng-chartist)

## Demo

https://willsoto.github.io/ng-chartist/demo/

## Table of contents

* [About](#about)
* [Installation](#installation)
* [Documentation](#documentation)
* [Development](#development)
* [License](#licence)

## About

Chartist component for Angular 2

## Installation

### Install through npm:

```
npm install @angular/core ng-chartist chartist --save
```

### Additionally typings for the chartist library need to be installed:

* For TSC <= 1.8:

```
npm install -g typings --save
```

```
typings install -g dt~chartist --save
```

* For TSC = 2.0+ typings can be installed through npm directly:

```
npm install @types/chartist --save-dev
```

### Then use it in your app like so:

```typescript
import { NgModule } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { MyAppComponent } from './my-app';

@NgModule({
  imports: [ChartistModule],
  bootstrap: [MyAppComponent]
})
export class AppModule {}
```

### Add chart styles to your app:

* using `.angular-cli.json`:

```javascript
"styles": [
  "scss/style.scss",
  "../node_modules/chartist/dist/chartist.css"
],
```

* or in the `index.html` file with:

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
```

You may also find it useful to view the [demo source](https://github.com/willsoto/ng-chartist/blob/master/demo/demo.ts).

### Usage without a module bundler

```
<script src="node_modules/ng-chartist/dist/ng-chartist.js"></script>
<script>
    // everything is exported ngChartist namespace
</script>
```

## Documentation

All documentation is auto-generated from the source via typedoc and can be viewed [here](https://willsoto.github.io/ng-chartist/docs/)

## Development

### Prepare your environment

* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server

Run `npm start` to start a development server on port 8080 with auto reload + tests.

### Testing

Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release

* Bump the version in package.json (once the module hits 1.0 this will become automatic)

```bash
npm run release
```

## License

Apache-2.0
