Validate Time
=============
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

[OpenTSDB](http://opentsdb.net) utility providing time validation.

OpenTSDB allows three time [formats](http://opentsdb.net/docs/build/html/user_guide/query/dates.html). This library exposes an API to validate time values in accordance with the allowed formats.


### Install

For use in Node.js,

``` bash
$ npm install opentsdb-validate-time
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


### Validate 

To create an OpenTSDB time validator,

``` javascript
var validate = require( 'opentsdb-validate-time' );
```

The validator is exported as a class instance (in Node, as a singleton) and has the following methods...


#### validate.absolute( date )

Validates whether an input string is an absolute date; e.g., `2014/07/18-9:34:42`. An absolute date is formatted according to the following rules:

*	`year`, `month`, and `day` are separated by `/`: `year/month/day`
* 	calendar values are separated from temporal values by either a space or `-`: `year/month/day-00:00:00` or `year/month/day 00:00:00`
*	if specified, hour and minutes must be specified together: `00:00`
*	seconds are optional


``` javascript
validate.absolute( '2014/07/14' );
validate.absolute( '2014/07/14 9:23' );
validate.absolute( '2014/07/18-9:34:42' );
```


#### validate.timestamp( timestamp )

Validates whether an input value is a timestamp. A timestamp may be either in seconds or milliseconds.

``` javascript
var timestamp = Date.now();

validate.timestamp( timestamp );
validate.timestamp( Math.round( timestamp/1000 ) );
```



#### validate.relative( time )

Validates whether an input string is a relative time. Relative times have a time unit (`ms`, `s`, `m`, `h`, `d`, `w`, `n`, `y`) and the suffix `-ago`.

``` javascript
validate.relative( '72000ms-ago' );
```

Note: the unit for months is `n`.


#### validate.format( time )

Returns an input value's time format.

``` javascript
validate.format( '2014/07/18-9:34:42' );
// returns 'absolute'

validate.format( Date.now() );
// returns 'timestamp'

validate.format( '72000ms-ago' );
// returns 'relative'

validate.format( 'beep' );
// returns undefined
```


## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/opentsdb-validate-time.svg
[npm-url]: https://npmjs.org/package/opentsdb-validate-time

[travis-image]: http://img.shields.io/travis/opentsdb-js/opentsdb-validate-time/master.svg
[travis-url]: https://travis-ci.org/opentsdb-js/opentsdb-validate-time

[coveralls-image]: https://img.shields.io/coveralls/opentsdb-js/opentsdb-validate-time/master.svg
[coveralls-url]: https://coveralls.io/r/opentsdb-js/opentsdb-validate-time?branch=master

[dependencies-image]: http://img.shields.io/david/opentsdb-js/opentsdb-validate-time.svg
[dependencies-url]: https://david-dm.org/opentsdb-js/opentsdb-validate-time

[dev-dependencies-image]: http://img.shields.io/david/dev/opentsdb-js/opentsdb-validate-time.svg
[dev-dependencies-url]: https://david-dm.org/dev/opentsdb-js/opentsdb-validate-time

[github-issues-image]: http://img.shields.io/github/issues/opentsdb-js/opentsdb-validate-time.svg
[github-issues-url]: https://github.com/opentsdb-js/opentsdb-validate-time/issues