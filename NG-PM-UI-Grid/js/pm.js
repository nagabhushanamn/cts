/**
 * http://usejsdoc.org/
 */

(function() {

	var pmModule = angular.module('pm', [ 'ui.router','ui.grid'  ]);

	pmModule.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		// state(s)
		$stateProvider.state('home', {
			url : '/',
			templateUrl : "templates/pm-home.html"
		}).state('all', {
			url : '/view-all',
			resolve:{
				 simpleObj : function() {
					 //...
					return {
						value : 'simple!'
					};
				},
				loadAllPromise:function(pmService){
					return pmService.loadAll();
				}
			},
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

	pmModule.controller('ViewAllController',function($scope, $state, pmService,simpleObj,loadAllPromise) {

				console.log(simpleObj);
		
				//	pmService.loadAll().then(function(items) {
				//		$scope.products = items;
				//	});
				
				$scope.products=loadAllPromise;

				$scope.remove = function(id) {
					pmService.remove(id).then(function() {
						$state.reload();
					});
				};
			});

	pmModule.controller('AddNewController',function($scope, pmService, $state) {
				$scope.product = {};
				$scope.save = function() {
					pmService.save($scope.product).then(function(item) {
						$scope.product = {};
						$state.go('all');
					});
				};
			});

	pmModule.controller('ViewAndUpdateController', function($scope, pmService,$location, $stateParams) {

		if ($stateParams.pid) {
			pmService.load($stateParams.pid).then(function(item) {
				$scope.product = item;
			});
		}

		$scope.save = function() {
			pmService.update($scope.product).then(function(item) {
				$scope.product = {};
				$location.path('view-all');
			});
		};
	});

	// ----------------------------------------------------

	pmModule.factory('pmService', function($http, $q) {

		var url = "http://localhost:3000/api/products";

		var service = {
			loadAll : function() {
				var defer = $q.defer();
				$http.get(url).then(function(resp) {
					defer.resolve(resp.data);
				});
				return defer.promise;
			},
			load : function(id) {
				var defer = $q.defer();
				$http.get(url + "/" + id).then(function(resp) {
					defer.resolve(resp.data);
				});
				return defer.promise;
			},
			save : function(newProduct) {
				newProduct.make = Date.now(); // 
				var defer = $q.defer();
				$http.post(url, newProduct).then(function(resp) {
					defer.resolve(resp.data);
				});
				return defer.promise;
			},
			update : function(newProduct) {
				var defer = $q.defer();
				$http.put(url, newProduct).then(function(resp) {
					defer.resolve(resp.data);
				});
				return defer.promise;
			},
			remove : function(id) {
				var defer = $q.defer();
				$http['delete'](url + "/" + id).then(function(resp) {
					defer.resolve(resp.data);
				});
				return defer.promise;
			},

		};

		return service;

	});

})();