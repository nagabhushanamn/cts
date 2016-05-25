/**
 * http://usejsdoc.org/
 */

(function() {

	var pmModule = angular.module('pm', [ 'ngRoute' ]);

	pmModule.config(function($routeProvider) {
		
		
		$routeProvider.otherwise({redirectTo:'/'});

		$routeProvider
		.when('/', {templateUrl: "templates/pm-home.html"})
		.when('/view-all', {templateUrl: "templates/pm-grid.html",controller: "ViewAllController"})
		.when('/add-new',  {templateUrl: "templates/pm-product-form.html",controller: "AddNewController"})
		.when('/edit-product/:pid',  {templateUrl: "templates/pm-product-form.html",controller: "ViewAndUpdateController"});
		
		
	});
	
	//-------------------------------------------------------------------------
	
	
	pmModule.controller('ViewAllController', function($scope,$route,pmService) {
		
		pmService.loadAll()
		.then(function(items) {
			$scope.products=items;
		});
		
		$scope.remove=function(id){
			pmService.remove(id)
			.then(function(){
				$route.reload();
			});
		};
	});
	
	pmModule.controller('AddNewController', function($scope,pmService,$location) {
		$scope.product={};
		$scope.save=function(){
			pmService.save($scope.product)
			.then(function(item) {
				$scope.product={};
				$location.path('view-all');
			});
		};
	});
	
	
	pmModule.controller('ViewAndUpdateController', function($scope,pmService,$routeParams,$location) {
		
		if($routeParams.pid){
			pmService.load($routeParams.pid)
			.then(function(item){
				$scope.product=item;
			});
		}
		
		$scope.save=function(){
			pmService.update($scope.product)
			.then(function(item) {
				$scope.product={};
				$location.path('view-all');
			});
		};
	});
	
	//----------------------------------------------------
	
	pmModule.factory('pmService', function($http,$q) {
		
		var url="http://localhost:3000/api/products";
		
		var service={
				loadAll:function(){
					var defer=$q.defer();
					$http.get(url)
					.then(function(resp) {
						defer.resolve(resp.data);
					});
					return defer.promise;
				},
				load:function(id){
					var defer=$q.defer();
					$http.get(url+"/"+id)
					.then(function(resp) {
						defer.resolve(resp.data);
					});
					return defer.promise;
				},
				save:function(newProduct){
					newProduct.make=Date.now();  // 
					var defer=$q.defer();
					$http.post(url,newProduct)
					.then(function(resp) {
						defer.resolve(resp.data);
					});
					return defer.promise;
				},
				update:function(newProduct){
					var defer=$q.defer();
					$http.put(url,newProduct)
					.then(function(resp) {
						defer.resolve(resp.data);
					});
					return defer.promise;
				},
				remove:function(id){
					var defer=$q.defer();
					$http['delete'](url+"/"+id)
					.then(function(resp) {
						defer.resolve(resp.data);
					});
					return defer.promise;
				},
				
		};
		
		return service;
		
	});
	
	
	
	

})();