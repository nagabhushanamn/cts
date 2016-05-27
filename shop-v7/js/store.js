/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', [ 'store-service' ]);

	// --------------------------------------------

	// Controller
	storeModule.controller('StoreController', function($scope, Product) {
		Product.query().$promise.then(function(items) {
			$scope.products = items;
		});
	});

	storeModule.controller('TabsController', function($scope, Review) {
		$scope.tab = 1; // ng-init="tab=1"
		$scope.changeTab = function(tabIndex, product) {

			$scope.tab = tabIndex;

			if (tabIndex === 3) {
				product.reviews = Review.query({
					productId : product.id
				});
			}

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

	storeModule.directive('productReviewForm', function(Review) {
		return {
			restrict : "AE",
			scope : true,
			templateUrl : "templates/product-review-form.html",
			controller : function($scope) {
				$scope.newReview = {
					author : 'nag@gmail.com'
				};
				$scope.addNewReview = function(product) {

					var review = new Review();
					angular.extend(review, $scope.newReview);
					review.productId = product.id;

					review.$save(function(review) {

						if (product.reviews) {
							product.reviews.push(review);
						} else {
							product.reviews = [];
							product.reviews.push(review);
						}

						$scope.newReview = {};
						$scope.newReview = {
							author : 'nag@gmail.com'
						};

					});

				};
			}
		};
	});

	// --------------------------------------------------------

})();