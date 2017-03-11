# Angular Chartist

[![Greenkeeper badge](https://badges.greenkeeper.io/willsoto/ng-chartist.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/willsoto/ng-chartist.svg?branch=master)](https://travis-ci.org/willsoto/ng-chartist)
[![npm version](https://badge.fury.io/js/ng-chartist.svg)](http://badge.fury.io/js/ng-chartist)
[![devDependency Status](https://david-dm.org/willsoto/ng-chartist/dev-status.svg)](https://david-dm.org/willsoto/ng-chartist#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/willsoto/ng-chartist.svg)](https://github.com/willsoto/ng-chartist/issues)
[![Coverage Status](https://coveralls.io/repos/github/willsoto/ng-chartist/badge.svg?branch=master)](https://coveralls.io/github/willsoto/ng-chartist?branch=master)

## Demo
https://willsoto.github.io/ng-chartist/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

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
import {
  NgModule
} from '@angular/core';

import {
  ChartistModule
} from 'ng-chartist';

import {
  MyAppComponent
} from './my-app';

@NgModule({
  imports: [
    ChartistModule,
  ],
  bootstrap: [MyAppComponent]
})
export class AppModule { }

```

You may also find it useful to view the [demo source](https://github.com/paradox41/ng-chartist/blob/master/demo/demo.ts).

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
