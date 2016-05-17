/**
 * http://usejsdoc.org/
 */

// function init() {
//
// var count = 0; // private members
//
// // public members
// return {
// doCount : function() {
// count++;
// },
// getCount : function() {
// return count;
// }
// };
//
// }
//
// var counter_mod = init();
// ---------------------------------
// self executable func
var counter_mod = (function() {

	var count = 0; // private members

	// public members
	return {
		doCount : function() {
			count++;
		},
		getCount : function() {
			return count;
		}
	};

})();

// -------------------------------

// use counter-module

counter_mod.doCount();
counter_mod.doCount();

// unexpected init
// count = 0; // cant access

console.log(counter_mod.getCount());
