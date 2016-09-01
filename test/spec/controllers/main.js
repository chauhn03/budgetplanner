'use strict';

describe('example test', function() {
  it('should be true', function() {
    expect('abc').toBe('foo');
  });
});
//////'use strict';
//
//describe('Controller: ExpenseListController', function () {
//
//  // load the controller's module
//  beforeEach(module('budgetplannerApp'));
//
//  var MainCtrl,
//    scope;
//
//  // Initialize the controller and a mock scope
//  beforeEach(inject(function ($controller, $rootScope) {
//    scope = $rootScope.$new();
//    MainCtrl = $controller('ExpenseListController', {
//      $scope: scope
//      // place here mocked dependencies
//    });
//  }));
//
//  it('should attach a list of awesomeThings to the scope', function () {
//    expect(MainCtrl.awesomeThings.length).toBe(3);
//  });
//});
