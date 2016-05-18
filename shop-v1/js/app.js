/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', []);

	// --------------------------------------------

	// Model ( data ) ( shud load from server )
	var item = {
		name : 'Laptop',
		price : 198000,
		description : 'New Mac pro'
	};

	// --------------------------------------------

	// a.using plain-js

	// document.querySelector('h4').innerHTML=item.name;
	// document.querySelector('h5').innerHTML=item.price;
	// document.querySelector('p').innerHTML=item.description;

	// b.using jquery

	// $(function(){
	// $("h4").text(item.name);
	// $("h5").text(item.price);
	// $("p").text(item.description);
	// });
	//	
	
	// --------------------------------------------

	// Controller
	storeModule.controller('StoreController', function() {
		this.product=item;
	});
	
	
	

})();