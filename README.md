# Angular2 Chartist
[![Build Status](https://travis-ci.org/willsoto/angular2-chartist.svg?branch=master)](https://travis-ci.org/willsoto/angular2-chartist)
[![npm version](https://badge.fury.io/js/angular2-chartist.svg)](http://badge.fury.io/js/angular2-chartist)
[![devDependency Status](https://david-dm.org/willsoto/angular2-chartist/dev-status.svg)](https://david-dm.org/willsoto/angular2-chartist#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/willsoto/angular2-chartist.svg)](https://github.com/willsoto/angular2-chartist/issues)
[![Coverage Status](https://coveralls.io/repos/github/willsoto/angular2-chartist/badge.svg?branch=master)](https://coveralls.io/github/willsoto/angular2-chartist?branch=master)

## Demo
https://willsoto.github.io/angular2-chartist/demo/

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
npm install @angular/core angular2-chartist chartist --save
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
} from 'angular2-chartist';

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
