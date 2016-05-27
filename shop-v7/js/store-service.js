/**
 * http://usejsdoc.org/
 */

(function() {

	var mod = angular.module('store-service', [ 'ngResource' ]);

	mod.factory('Product', function($resource) {

		var uri = "http://0.0.0.0:3000/api/products/:id";
		var Product = $resource(uri, {
			id : '@id'
		});

		return Product;

	});

	mod.factory('Review', function($resource) {

		var uri = "http://0.0.0.0:3000/api/products/:productId/reviews";
		var Review = $resource(uri, {
			productId : '@productId'
		});

		return Review;

	});

})();