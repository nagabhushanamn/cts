/**
 * http://usejsdoc.org/
 */

(function() {

	var pmModule = angular.module('pm', [ 'ui.router','ngResource'  ]);

	pmModule.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		// state(s)
		$stateProvider.state('home', {
			url : '/',
			templateUrl : "templates/pm-home.html"
		}).state('all', {
			url : '/view-all',
			templateUrl : "templates/pm-grid.html",
			controller : 'ViewAllController'
		}).state('new', {
			url : '/add-new',
			templateUrl : "templates/pm-product-form.html",
			controller : 'AddNewController'
		}).state('all.edit', {
			url : '/edit-product/:pid',
			views : {
				view1 : {
					templateUrl : "templates/pm-product-view.html",
					controller : 'ViewAndUpdateController'
				},
				view2 : {
					templateUrl : "templates/pm-product-form.html",
					controller : 'ViewAndUpdateController'
				}
			}

		}).state('all.view', {
			url : '/view-product/:pid',
			views : {
				view1 : {
					templateUrl : "templates/pm-product-view.html",
					controller : 'ViewAndUpdateController'
				}
			}

		});

	});

	// -------------------------------------------------------------------------

	pmModule.controller('ViewAllController',function($scope, $state , Product) {

				
				$scope.products=Product.query();

				$scope.remove = function(pid) {
					Product.remove({id:pid})
					.$promise
					.then(function(value) {
						$state.reload();
					});
				};
			});

	pmModule.controller('AddNewController',function($scope, Product, $state) {
				$scope.product = {};
				$scope.save = function() {
					var product=new Product(); // resource instance
					angular.extend(product,$scope.product);
					product.make=Date.now();
					product.$save(function(){
						$state.go('all');
					});
				};
			});

	pmModule.controller('ViewAndUpdateController', function($scope,Product,$state, $stateParams) {

		if ($stateParams.pid) {
			$scope.product=Product.get({id:$stateParams.pid});
		}

		$scope.save = function() {
			Product.updateProduct($scope.product)
			.$promise
			.then(function(){
				$state.go('all'); 
			});
		};
	});

	// ----------------------------------------------------

	pmModule.factory('Product', function($resource) {
		var uri = "http://localhost:3000/api/products/:id";
		return $resource(uri,{id:'@id'},{updateProduct:{method:'PUT'}});
	});

})();