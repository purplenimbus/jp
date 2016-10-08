'use strict';

describe('Service: elements', function () {

  // load the service's module
  beforeEach(module('jpApp'));

  // instantiate service
  var elements;
  beforeEach(inject(function (_elements_) {
    elements = _elements_;
  }));

  it('should do something', function () {
    expect(!!elements).toBe(true);
  });

});
