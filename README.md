# Angular2 Chartist
[![Build Status](https://travis-ci.org/paradox41/angular2-chartist.svg?branch=master)](https://travis-ci.org/paradox41/angular2-chartist)
[![npm version](https://badge.fury.io/js/angular2-chartist.svg)](http://badge.fury.io/js/angular2-chartist)
[![devDependency Status](https://david-dm.org/paradox41/angular2-chartist/dev-status.svg)](https://david-dm.org/paradox41/angular2-chartist#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/paradox41/angular2-chartist.svg)](https://github.com/paradox41/angular2-chartist/issues)
[![Coverage Status](https://coveralls.io/repos/github/paradox41/angular2-chartist/badge.svg?branch=master)](https://coveralls.io/github/paradox41/angular2-chartist?branch=master)

## Demo
https://paradox41.github.io/angular2-chartist/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About

Chartist component for Angular 2

## Installation

Install through npm:
```
npm install --save @angular/core@2.0.0-rc.4 angular2-chartist chartist
```

Then use it in your app like so:

```typescript
import { Component } from '@angular/core';
import { ChartistComponent } from 'angular2-chartist';

@Component({
  selector: 'demo-app',
  directives: [ChartistComponent],
  template: `
    <x-chartist
      [data]="data"
      [type]="type"
      [options]="options"
      [responsiveOptions]="responsiveOptions">
    </x-chartist>
  `
})
export class DemoApp {}
```

You may also find it useful to view the [demo source](https://github.com/paradox41/angular2-chartist/blob/master/demo/demo.ts).

### Usage without a module bundler
```
<script src="node_modules/angular2-chartist/dist/angular2-chartist.js"></script>
<script>
    // everything is exported angular2Chartist namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://paradox41.github.io/angular2-chartist/docs/

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
