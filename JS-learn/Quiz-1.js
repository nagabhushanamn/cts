/**
 * http://usejsdoc.org/
 */


function Person(name,age){   // class
	this.name=name;
	this.age=age;
	this.sayName=function(){
		console.log('im '+this.name);
	};
}

Person('name',100); // func invocation