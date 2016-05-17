/**
 * http://usejsdoc.org/
 */

function Person(n, a) {
	this.name = n;
	this.age = a;
	console.log('one person created...');
	
	var that=this;
	
	setInterval(function() {
		that.age++;
		console.log(that.name + "-->" + that.age);
	}, 1000);

}

var p1 = new Person('Ria', 1);