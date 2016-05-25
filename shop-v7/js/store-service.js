/**
 * http://usejsdoc.org/
 */

(function() {

	var storeServiceModule = angular.module('store-service', []);

	// Service
	storeServiceModule.factory('storeService', function($q, $http) {

		var url = 'http://0.0.0.0:3000/api/products';

		// var url="products.json;

		var service = {
			loadAllItems : function() {

				var defer = $q.defer();

				// communicate with server .....
				var promise = $http.get(url); // AJAX call using XHR API
				promise.then(function(resp) {
					defer.resolve(resp.data);
				}, function(reason) {
					defer.reject(reason);
				});

				return defer.promise;

			}
		};

		return service;

	});

})();