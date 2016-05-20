/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', []);

	// --------------------------------------------

	// Model ( data )
	var items = [ {
		name : 'Laptop',
		price : 198000, // number
		description : 'New Mac pro',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		discount:10000,
		images:[
		        {thumb:'images/Laptop.png',full:''},
		        {thumb:'images/Laptop.png',full:''}
		        ]
	}, {
		name : 'Mobile',
		price : 8000,
		description : 'New model',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		images:[
		        {thumb:'images/Mobile.png',full:''},
		        {thumb:'images/Mobile.png',full:''}
		        ]
	} ];

	// --------------------------------------------

	// Controller
	storeModule.controller('StoreController', function($scope,$filter) {
		// $scope.product = item; // View-Model
		$scope.products = $filter('orderBy')(items,'price');
		console.log($filter('uppercase')('nag'));
		console.log($filter('priceDiscount')(1000,100));
	});

	// --------------------------------------------

	// Filter(s)

	storeModule.filter('priceDiscount', function() {

		return function(originalPrice, discount) {

			if (angular.isNumber(originalPrice)) {
				if (discount) {
					return originalPrice - discount;
				} else {
					return originalPrice - 1;
				}
			} else {
				//throw new Error('priceDiscount filter can work with only number');
			}

		};
	});

	// --------------------------------------------

})();