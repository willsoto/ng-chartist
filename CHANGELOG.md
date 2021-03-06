# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [5.0.0](https://github.com/willsoto/ng-chartist/compare/v4.0.0...v5.0.0) (2021-05-27)


### Features

* enable ivy and partial compilation mode ([b8f3957](https://github.com/willsoto/ng-chartist/commit/b8f395778112031ba950bf3967cd7f287f8a8254))
* update all packages ([419aee6](https://github.com/willsoto/ng-chartist/commit/419aee6743ad58b75464de8518831081ef42d1be))
* **chartist-cmp:** "initialized" event emitted when the chart object is created. ([#226](https://github.com/willsoto/ng-chartist/issues/226)) ([25baa49](https://github.com/willsoto/ng-chartist/commit/25baa499ea0399091932e36912ce01a9754b48b8))
* **github:** add push workflow ([8821f66](https://github.com/willsoto/ng-chartist/commit/8821f66cf3c683dddc8c576b58cf602bb3528be5))
* **github:** add workflow ([11e7764](https://github.com/willsoto/ng-chartist/commit/11e7764ce284d97b79bbd1f3ee5a1af6c1f44b11))


### Bug Fixes

* clear deprecation for --prod flag ([adefce0](https://github.com/willsoto/ng-chartist/commit/adefce016675cb93e0cdd35b2b012eb1e9d2fb46))
* library builder ([7e5cf9a](https://github.com/willsoto/ng-chartist/commit/7e5cf9a4353915a9e30ed21df6757a69510c575a))
* **ci:** use lts node container ([2a55c03](https://github.com/willsoto/ng-chartist/commit/2a55c03d4d4c3f0434de8ec644a3c6f75b21fd5e))
* pin @types/jasmine to 3.3.11 ([d74b7fa](https://github.com/willsoto/ng-chartist/commit/d74b7fa7dd08fc4e1be3b6891fbfc2d787ef38d8))

<a name="4.1.0"></a>
# [4.1.0](https://github.com/willsoto/ng-chartist/compare/v4.0.0...v4.1.0) (2019-01-24)


### Features

* **chartist-cmp:** "initialized" event emitted when the chart object is created. ([#226](https://github.com/willsoto/ng-chartist/issues/226)) ([25baa49](https://github.com/willsoto/ng-chartist/commit/25baa49))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/willsoto/ng-chartist/compare/v3.1.0...v4.0.0) (2019-01-20)


### Bug Fixes

* **async-chart:** using "async" pipe since promises are no longer accepted as input values. ([4063f8d](https://github.com/willsoto/ng-chartist/commit/4063f8d))
* **chartist-cmp:** component should have "display: block" style set by default. ([f4a894f](https://github.com/willsoto/ng-chartist/commit/f4a894f))
* **chartist-cmp:** component template should be just empty. ([b6bc795](https://github.com/willsoto/ng-chartist/commit/b6bc795))
* **chartist-cmp:** events should be bound with every new chart initialization. ([ba78c62](https://github.com/willsoto/ng-chartist/commit/ba78c62))
* **chartist-cmp:** unset chart reference on component destruction. ([985d068](https://github.com/willsoto/ng-chartist/commit/985d068))
* **chartist-cmp:** use "div" tag instead of "ng-content" since nothing is projected. ([0498e3e](https://github.com/willsoto/ng-chartist/commit/0498e3e))
* **demo-app:** removed useless "div" container. ([23cace7](https://github.com/willsoto/ng-chartist/commit/23cace7))
* **library-build:** package.json should be copied in cross-platform way before every library build. ([15258d3](https://github.com/willsoto/ng-chartist/commit/15258d3))
* **live-chart:** fix memory leak. ([27ab67f](https://github.com/willsoto/ng-chartist/commit/27ab67f))
* **live-chart:** use Angular DI to inject DatePipe. ([9a0b104](https://github.com/willsoto/ng-chartist/commit/9a0b104))
* **live-chart:** use Angular formatDate() function instead of DatePipe to format time. ([83683db](https://github.com/willsoto/ng-chartist/commit/83683db))
* **ng-chartist:** corrected method visibility in chartist component. ([de1f891](https://github.com/willsoto/ng-chartist/commit/de1f891))
* **ng-chartist:** get nativeElement from ElementRef in ngOnInit() instead of constructor. ([8c79179](https://github.com/willsoto/ng-chartist/commit/8c79179))
* **ng-chartist:** Remove useless "ts-ignore" annotations. ([c84201c](https://github.com/willsoto/ng-chartist/commit/c84201c))
* **package.json:** fix "pack" script. ([74002e6](https://github.com/willsoto/ng-chartist/commit/74002e6))
* **style:** load Chartist stylesheet before demo app stylesheet and remove "!important" CSS rule. ([326ce65](https://github.com/willsoto/ng-chartist/commit/326ce65))


### Features

* **library:** chartist component simplification and unit test refactoring. ([5357a66](https://github.com/willsoto/ng-chartist/commit/5357a66))
* **live-chart:** improve label formatting. ([9c34d86](https://github.com/willsoto/ng-chartist/commit/9c34d86))
* **live-chart:** replaced setInterval() with RxJS timer since it allows setting initial delay. ([b0be49a](https://github.com/willsoto/ng-chartist/commit/b0be49a))



<a name="3.1.0"></a>
# [3.1.0](https://github.com/willsoto/ng-chartist/compare/v3.0.3...v3.1.0) (2019-01-14)


### Bug Fixes

* add README to package ([410241e](https://github.com/willsoto/ng-chartist/commit/410241e))


### Features

* add release script ([5c316d6](https://github.com/willsoto/ng-chartist/commit/5c316d6))



<a name="3.0.3"></a>
## [3.0.3](https://github.com/willsoto/ng-chartist/compare/v3.0.2...v3.0.3) (2019-01-13)


### Bug Fixes

* fix files glob ([8e87ea9](https://github.com/willsoto/ng-chartist/commit/8e87ea9))



<a name="3.0.2"></a>
## [3.0.2](https://github.com/willsoto/ng-chartist/compare/v3.0.1...v3.0.2) (2019-01-13)



<a name="3.0.1"></a>
## [3.0.1](https://github.com/willsoto/ng-chartist/compare/v3.0.0...v3.0.1) (2019-01-13)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/willsoto/ng-chartist/compare/v3.0.0-alpha.0...v3.0.0) (2019-01-11)



<a name="3.0.0-alpha.0"></a>
# [3.0.0-alpha.0](https://github.com/willsoto/ng-chartist/compare/v2.0.0-beta.1...v3.0.0-alpha.0) (2019-01-11)


### Bug Fixes

* **aot:** Recreated the library using Angular cli generated projects and as a result: ([7506bfd](https://github.com/willsoto/ng-chartist/commit/7506bfd))
* **lib:** add missing information to library's package.json. ([810ef8b](https://github.com/willsoto/ng-chartist/commit/810ef8b))
* **live-chart:** a couple of fixes for the live chart demo: ([818e8a1](https://github.com/willsoto/ng-chartist/commit/818e8a1))
* **style:** increase axis label size and move global styling to style.css in the demo app. ([76585ae](https://github.com/willsoto/ng-chartist/commit/76585ae))
* **styling:** include missing bootstrap CSS and top menu toolbar. ([e305299](https://github.com/willsoto/ng-chartist/commit/e305299))
* **typedoc:** fixed generation of documentation. ([e985153](https://github.com/willsoto/ng-chartist/commit/e985153))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/willsoto/ng-chartist/compare/v2.0.0-beta.1...v3.0.0) (2019-01-10)

### Features

* Support for Angular 6 and 7

### Bug Fixes

* Fix AOT builds

<a name="2.0.0-beta.1"></a>
# [2.0.0-beta.1](https://github.com/willsoto/ng-chartist/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2018-04-07)



<a name="2.0.0-beta.0"></a>
# [2.0.0-beta.0](https://github.com/willsoto/ng-chartist/compare/v1.1.1...v2.0.0-beta.0) (2018-04-04)


### Features

* use ng-packagr for distribution ([e9bf54b](https://github.com/willsoto/ng-chartist/commit/e9bf54b))


### BREAKING CHANGES

* this changes the structure of the dist directory. So I wanna be safe

Signed-off-by: Will Soto <will.soto9@gmail.com>



<a name="1.1.1"></a>
## [1.1.1](https://github.com/willsoto/ng-chartist/compare/v1.1.0...v1.1.1) (2017-06-02)


### Bug Fixes

* **AoT:** ignore lib check to allow ngc to compile ([1de026f](https://github.com/willsoto/ng-chartist/commit/1de026f)), closes [#104](https://github.com/willsoto/ng-chartist/issues/104) [#124](https://github.com/willsoto/ng-chartist/issues/124)



<a name="1.1.0"></a>
# [1.1.0](https://github.com/willsoto/ng-chartist/compare/v1.0.0...v1.1.0) (2017-03-11)


### Features

* **chartist:** throw error when invalid chart type is passed ([a1637cf](https://github.com/willsoto/ng-chartist/commit/a1637cf)), closes [#97](https://github.com/willsoto/ng-chartist/issues/97)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/willsoto/ng-chartist/compare/v0.12.2...v1.0.0) (2017-03-11)


### Features

* **all:** rename package to ng-chartist ([572f6d8](https://github.com/willsoto/ng-chartist/commit/572f6d8))


### BREAKING CHANGES

* all: rename package from  to  to conform with new Angular Naming Guidelines.
This only affect how you install and import the library (no actual breaking changes in code).
Before:

```
npm install --save angular2-chartist
...
import { ChartistModule } from 'angular2-chartist';
```

After:

```
npm install --save ng-chartist
...
import { ChartistModule } from 'ng-chartist';
```

Signed-off-by: Will Soto <will.soto9@gmail.com>



<a name="0.12.2"></a>
## [0.12.2](https://github.com/willsoto/angular2-chartist/compare/v0.12.1...v0.12.2) (2017-02-23)


### Bug Fixes

* **dist:** revert AoT changes. Too many issues ([94e8a4d](https://github.com/willsoto/angular2-chartist/commit/94e8a4d)), closes [#94](https://github.com/willsoto/angular2-chartist/issues/94)



<a name="0.12.1"></a>
## [0.12.1](https://github.com/willsoto/angular2-chartist/compare/v0.12.0...v0.12.1) (2017-02-22)


### Bug Fixes

* **typings:** fix typings not being correctly generated ([8b57cd0](https://github.com/willsoto/angular2-chartist/commit/8b57cd0))



<a name="0.12.0"></a>
# [0.12.0](https://github.com/willsoto/angular2-chartist/compare/v0.11.1...v0.12.0) (2017-02-22)


### Features

* **AoT:** Support AoT compilation ([bc1452c](https://github.com/willsoto/angular2-chartist/commit/bc1452c)), closes [#55](https://github.com/willsoto/angular2-chartist/issues/55)



<a name="0.11.1"></a>
## [0.11.1](https://github.com/willsoto/angular2-chartist/compare/v0.11.0...v0.11.1) (2017-02-10)



<a name="0.11.0"></a>
# [0.11.0](https://github.com/paradox41/angular2-chartist/compare/v0.10.1...v0.11.0) (2017-01-23)


### Bug Fixes

* **webpack:** append -loader to loaders ([26c6a08](https://github.com/paradox41/angular2-chartist/commit/26c6a08))


### Features

* **yarn:** add yarn.lock ([88b199d](https://github.com/paradox41/angular2-chartist/commit/88b199d))



<a name="0.10.1"></a>
## [0.10.1](https://github.com/paradox41/angular2-chartist/compare/v0.10.0...v0.10.1) (2016-10-19)



<a name="0.10.0"></a>
# [0.10.0](https://github.com/paradox41/angular2-chartist/compare/v0.8.0...v0.10.0) (2016-10-18)


### Bug Fixes

* **chartist.component:** throw error if chart does not have data or type ([0c0dea0](https://github.com/paradox41/angular2-chartist/commit/0c0dea0)), closes [#41](https://github.com/paradox41/angular2-chartist/issues/41)
* **chartist.module:** export ChartistComponent correctly ([cbc2873](https://github.com/paradox41/angular2-chartist/commit/cbc2873)), closes [#39](https://github.com/paradox41/angular2-chartist/issues/39)
* **dist:** concat to one file and include the module declaration ([d385bee](https://github.com/paradox41/angular2-chartist/commit/d385bee)), closes [#48](https://github.com/paradox41/angular2-chartist/issues/48)


### Features

* **angular:** upgrade to angular 2.0 stable ([b62ea60](https://github.com/paradox41/angular2-chartist/commit/b62ea60))



<a name="0.9.5"></a>
## [0.9.5](https://github.com/paradox41/angular2-chartist/compare/v0.9.4...v0.9.5) (2016-09-24)



<a name="0.9.4"></a>
## [0.9.4](https://github.com/paradox41/angular2-chartist/compare/v0.9.3...v0.9.4) (2016-09-24)



<a name="0.9.3"></a>
## [0.9.3](https://github.com/paradox41/angular2-chartist/compare/v0.9.2...v0.9.3) (2016-09-24)


### Bug Fixes

* **chartist.component:** throw error if chart does not have data or type ([0c0dea0](https://github.com/paradox41/angular2-chartist/commit/0c0dea0)), closes [#41](https://github.com/paradox41/angular2-chartist/issues/41)



<a name="0.9.2"></a>
## [0.9.2](https://github.com/paradox41/angular2-chartist/compare/v0.9.1...v0.9.2) (2016-09-21)



<a name="0.9.1"></a>
## [0.9.1](https://github.com/paradox41/angular2-chartist/compare/v0.9.0...v0.9.1) (2016-09-21)


### Bug Fixes

* **chartist.module:** export ChartistComponent correctly ([cbc2873](https://github.com/paradox41/angular2-chartist/commit/cbc2873)), closes [#39](https://github.com/paradox41/angular2-chartist/issues/39)



<a name="0.9.0"></a>
# [0.9.0](https://github.com/paradox41/angular2-chartist/compare/v0.8.0...v0.9.0) (2016-09-15)


### Features

* **angular:** upgrade to angular 2.0 stable ([b62ea60](https://github.com/paradox41/angular2-chartist/commit/b62ea60))



<a name="0.8.0"></a>
# [0.8.0](https://github.com/paradox41/angular2-chartist/compare/v0.7.0...v0.8.0) (2016-09-02)


### Features

* **angular:** upgrade to angular rc.6 ([dcc2fed](https://github.com/paradox41/angular2-chartist/commit/dcc2fed))



<a name="0.7.0"></a>
# [0.7.0](https://github.com/paradox41/angular2-chartist/compare/v0.6.1...v0.7.0) (2016-08-13)


### Features

* **angular:** upgrade to RC.5 ([649d08b](https://github.com/paradox41/angular2-chartist/commit/649d08b))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/paradox41/angular2-chartist/compare/v0.6.0...v0.6.1) (2016-07-29)



<a name="0.6.0"></a>
# [0.6.0](https://github.com/paradox41/angular2-chartist/compare/v0.4.0...v0.6.0) (2016-07-06)


### Bug Fixes

* **typings:** include typings in build ([3ae78d8](https://github.com/paradox41/angular2-chartist/commit/3ae78d8)), closes [#11](https://github.com/paradox41/angular2-chartist/issues/11)


### Features

* **angular:** bump angular to rc.4 ([cbb135f](https://github.com/paradox41/angular2-chartist/commit/cbb135f))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/paradox41/angular2-chartist/compare/v0.4.0...v0.5.0) (2016-07-01)


### Features

* **angular:** bump angular to rc.4 ([37c8015](https://github.com/paradox41/angular2-chartist/commit/37c8015))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/paradox41/angular2-chartist/compare/v0.3.2...v0.4.0) (2016-06-22)


### Features

* **angular:** bump angular to rc.3 ([b7cc3e8](https://github.com/paradox41/angular2-chartist/commit/b7cc3e8))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/paradox41/angular2-chartist/compare/v0.3.1...v0.3.2) (2016-06-17)



<a name="0.3.1"></a>
## [0.3.1](https://github.com/paradox41/angular2-chartist/compare/v0.3.0...v0.3.1) (2016-06-17)


### Bug Fixes

* **build:** don't include Chartist in the bundle ([e4c0fb0](https://github.com/paradox41/angular2-chartist/commit/e4c0fb0))
* **chartist.component:** fix typo. Actual error exists in typings ([46b55b2](https://github.com/paradox41/angular2-chartist/commit/46b55b2)), closes [#6](https://github.com/paradox41/angular2-chartist/issues/6)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/paradox41/angular2-chartist/compare/v0.2.1...v0.3.0) (2016-06-16)


### Code Refactoring

* **chartist.component:** rename selector to be spec compliant ([02b228e](https://github.com/paradox41/angular2-chartist/commit/02b228e))


### BREAKING CHANGES

* chartist.component: chartist is now x-chartist

Signed-off-by: Will Soto <will.soto9@gmail.com>



<a name="0.2.1"></a>
## [0.2.1](https://github.com/paradox41/angular2-chartist/compare/v0.2.0...v0.2.1) (2016-06-15)


### Bug Fixes

* **build:** angular/core really wants beta.6 ([e85d68f](https://github.com/paradox41/angular2-chartist/commit/e85d68f))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/paradox41/angular2-chartist/compare/v0.1.3...v0.2.0) (2016-06-15)


### Features

* **angular:** bump angular to rc.2 ([a3e0923](https://github.com/paradox41/angular2-chartist/commit/a3e0923))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/paradox41/angular2-chartist/compare/v0.1.1...v0.1.3) (2016-06-06)


### Bug Fixes

* **package:** include files in release ([1f57c8b](https://github.com/paradox41/angular2-chartist/commit/1f57c8b))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/paradox41/angular2-chartist/compare/v0.1.0...v0.1.1) (2016-06-06)



<a name="0.1.0"></a>
# 0.1.0 (2016-06-06)


### Bug Fixes

* **karma:** fix ENOENT when doing single run ([877249e](https://github.com/paradox41/angular2-chartist/commit/877249e))


### Features

* **chartist.component:** add support for changes ([1581007](https://github.com/paradox41/angular2-chartist/commit/1581007))
* **chartist.component:** add support for events ([f4bc523](https://github.com/paradox41/angular2-chartist/commit/f4bc523))
* **chartist.component:** allow inputs to be Promises ([b6194d4](https://github.com/paradox41/angular2-chartist/commit/b6194d4))
* **chartist.component:** clean up when the chart is removed ([7a792e6](https://github.com/paradox41/angular2-chartist/commit/7a792e6))
