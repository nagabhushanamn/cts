/**
 * http://usejsdoc.org/
 */

// using jasmine


describe('clac-ctrl test-suite', function() {

	beforeEach(module('calc'));

	var $controller;
	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	var controller;
	var scope;
	beforeEach(function() {
		scope = {};
		controller = $controller('CalcController', {
			$scope : scope
		}); // ng-controller='CalcController'
	});

	beforeEach(function() {
		scope.first = 1;
		scope.second = 2;
	});

	it('shud 1+2 equal to 3', function() {
		scope.doArith();
		expect(scope.latest).toEqual(3);
	});

	it('shud 1-2 equal to -1', function() {
		scope.operator = '-'
		scope.doArith();
		expect(scope.latest).toEqual(-1);
	});

	it('shud 1*2 equal to 2', function() {
		scope.operator = '*'
		scope.doArith();
		expect(scope.latest).toEqual(2);
	});

	it('shud 1/2 equal to 0.5', function() {
		scope.operator = '/'
		scope.doArith();
		expect(scope.latest).toEqual(0.5);
	});

});