/**
 * http://usejsdoc.org/
 */

var trainer = {
	name : "nag",
	doTeach : function() {
		console.log(this.name + " teaching JS"); // nag
		var self = this;
		function learn() {
			// console.log(v);
			console.log(this.name + ' learning JS from ' + self.name); // undefined
		}
		// learn();
		var emp = {
			name : 'cts'
		};
		learn.call(emp);
	}
};

trainer.doTeach();

// -----------------------------------

/*
 * Global Execution Context ( window / global) ( parent )
 * 
 * trainer : Execution Context ( doTeach ) ( child )
 * 
 * emp : Execution Context ( learn ) ( grand-child )
 * 
 */

