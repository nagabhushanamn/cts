/**
 * http://usejsdoc.org/
 */

function init() {

	console.log(this); // globa-obj

	var trainer = {
		name : "nag",
		doTeach : function() {
			console.log(this.name + " teaching JS"); // trainer
			var self = this;
			function learn() {
				// console.log(v);
				console.log(this.name + ' learning JS from ' + self.name); // employee
			}
			// learn();
			var emp = {
				name : 'cts'
			};
			learn.call(emp);
		}
	};

	trainer.doTeach();

}

init();

// -----------------------------------

/*
 * Global Execution Context ( window / global) ( parent )
 * 
 * trainer : Execution Context ( doTeach ) ( child )
 * 
 * emp : Execution Context ( learn ) ( grand-child )
 * 
 */

