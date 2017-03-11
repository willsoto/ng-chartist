# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
