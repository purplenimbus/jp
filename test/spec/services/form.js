'use strict';

describe('Service: form', function () {

  // load the service's module
  beforeEach(module('jpApp'));

  // instantiate service
  var form;
  beforeEach(inject(function (_form_) {
    form = _form_;
  }));

  it('should do something', function () {
    expect(!!form).toBe(true);
  });

});
