/*!
 * in-array <https://github.com/jonschlinkert/in-array>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var inArray = require('../');

describe('inArray:', function () {
  it('should return true if the value exists in the array.', function () {
    var fixture = ['a', 'b', 'c', 'c'];
    var actual = inArray(fixture, 'a');
    expect(actual).to.equal(true);
  });

  it('should return true if the value exists in the array.', function () {
    var fixture = ['a', 'b', 'c', 'c'];
    var actual = inArray(fixture, 'd');
    expect(actual).to.equal(false);
  });

  it('should\'nt blow up on empty arrays', function () {
    var fixture = [];
    var actual = inArray(fixture, 'd');
    expect(actual).to.equal(false);
  });

  it('should\'nt blow up on null', function () {
    var fixture = [];
    var actual = inArray(null, 'd');
    expect(actual).to.equal(false);
    expect(actual).to.not.equal(true);
  });

  it('should\'nt blow up when no value is passed', function () {
    var fixture = [];
    var actual = inArray(null);
    expect(actual).to.equal(false);
    expect(actual).to.not.equal(true);
  });
});