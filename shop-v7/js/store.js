/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', ['store-service']);

	// --------------------------------------------
	

	// Controller
	storeModule.controller('StoreController', function($scope, storeService) {
		var promise = storeService.loadAllItems();
		promise.then(function(items) {
			$scope.products = items;
		}, function(reason) {
			$scope.message = reason;
		});
	});

	storeModule.controller('TabsController', function($scope) {
		$scope.tab = 1; // ng-init="tab=1"
		$scope.changeTab = function(tabIndex) {
			$scope.tab = tabIndex;
		};
		$scope.isTabSelected = function(tabIndex) {
			return $scope.tab === tabIndex;
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
				// throw new Error('priceDiscount filter can work with only
				// number');
			}

		};
	});

	// --------------------------------------------

	// Directives

	storeModule.directive('productTitle', function() {
		return {
			restrict : "AE",
			scope : false,
			templateUrl : "templates/product-title.html",
			link : function(scope, iElement, iAttrs) {
				var dataEle = iElement.find('.data');
				dataEle.on('mouseenter', function() {
					dataEle.css('background-color', "#def");
				});
				dataEle.on('mouseleave', function() {
					dataEle.css('background-color', "#fff");
				});
			}
		};
	});

	storeModule.directive('productTabs', function() {
		return {
			restrict : "AE",
			scope : true,
			templateUrl : "templates/product-tabs.html",
			controller : 'TabsController'
		};
	});

	storeModule.directive('productReviewForm', function() {
		return {
			restrict : "AE",
			scope : true,
			templateUrl : "templates/product-review-form.html",
			controller : function($scope) {
				$scope.newReview = {
					author : 'nag@gmail.com'
				};
				$scope.addNewReview = function(product) {
					// send review-form data to server with productId ( next
					// session , we'll learn )
					product.reviews.push($scope.newReview);
					$scope.newReview = {};
					$scope.newReview = {
						author : 'nag@gmail.com'
					};
				};
			}
		};
	});

	// --------------------------------------------------------

})();