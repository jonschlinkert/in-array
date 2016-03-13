# in-array [![NPM version](https://img.shields.io/npm/v/in-array.svg?style=flat)](https://www.npmjs.com/package/in-array) [![NPM downloads](https://img.shields.io/npm/dm/in-array.svg?style=flat)](https://npmjs.org/package/in-array) [![Build Status](https://img.shields.io/travis/jonschlinkert/in-array.svg?style=flat)](https://travis-ci.org/jonschlinkert/in-array)

> Return true if a value exists in an array. Faster than using indexOf and won't blow up on null values.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install in-array --save
```

## Usage

```js
var inArray = require('in-array');
console.log(inArray(['a', 'b', 'c'], 'a'));
//=> true

console.log(inArray(null, 'a'));
//=> false

console.log(inArray(null));
//=> false
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/in-array/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/in-array/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v, on March 27, 2016._