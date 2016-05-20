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
		        ],
		reviews:[
		         {stars:5,author:'nag@gmail.com',comment:'good...'},
		         {stars:2,author:'indu@gmail.com',comment:'too costly...'},
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
		        ],
        reviews:[
		         {stars:5,author:'nag@gmail.com',comment:'good...'},
		         {stars:2,author:'indu@gmail.com',comment:'too costly...'},
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
	
	storeModule.controller('TabsController', function($scope) {
		$scope.tab=1; // ng-init="tab=1"
		$scope.changeTab=function(tabIndex){
			$scope.tab=tabIndex;
		};
		$scope.isTabSelected=function(tabIndex){
			return $scope.tab===tabIndex;
		};
	});
	
	storeModule.controller('ReviewFormController', function($scope) {
		$scope.newReview={author:'nag@gmail.com'};
		$scope.addNewReview=function(product){
			// send review-form data to server with productId ( next session , we'll learn )
			product.reviews.push($scope.newReview);
			$scope.newReview={};
			$scope.newReview={author:'nag@gmail.com'};
		};
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