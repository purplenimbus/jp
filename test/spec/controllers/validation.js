'use strict';

describe('Controller: ValidationCtrl', function () {

  // load the controller's module
  beforeEach(module('jpApp'));

  var ValidationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ValidationCtrl = $controller('ValidationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ValidationCtrl.awesomeThings.length).toBe(3);
  });
});
