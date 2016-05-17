/**
 * http://usejsdoc.org/
 */

// var i = 12;
//
// function f() {
// var i;
// console.log(i);
// var i = 13;
// }
//
// f();
// ----------------------------------

// why we 'this' keyword ?

//var person = {
//	name : 'Nag',
//	sayName : function() {
//		//console.log('im ' + person.name);
//		console.log('im ' + this.name);
//	}
//};
//
////person.sayName();
//
//var p=person;
//
//person={name:'Ria'};
//
//p.sayName();

// ----------------------------------


//var p1={name:"nag",sayName:function(){console.log('im '+this.name)}};
//var p2={name:"ria",sayName:function(){console.log('im '+this.name)}};

//global.name='GLOBAL'
//
//function sayNameForAll(){
//	console.log('im '+this.name);	
//}

// static func binding

//var p1={name:"nag",sayName:sayNameForAll};
//var p2={name:"ria",sayName:sayNameForAll};
//
//
//sayNameForAll();  // im GLOBAL      // function-invocation    ( this --> global-obj ).
//p1.sayName();     // im Nag         // method-invocation      ( this --> obj , who initiate execution context )
//p2.sayName();     // im Ria

//------------------------------------------

// own obj(s)
var p1={name:'Nag'};
var p2={name:'Ria'};


// third-party obj
var util={
		sayName:function(message,from){
			console.log(message+' im '+this.name+"-"+from);
		}
};


// dynamic func binding    :  ( dynamic func binding invocation pattern )

  // a. eager invocation

//util.sayName();

//util.sayName.call(p1,"Hello",'Bangalore');
//util.sayName.call(p2,"Hi",'Chennai');
//
//util.sayName.apply(p1,["Hello",'Bangalore']);
//util.sayName.apply(p2,["Hi",'Chennai']);

 // b. lazy invocation

//var newF=util.sayName.bind(p1,"Hello",'Bangalore');

  // on greet-event on 'p1'
//newF();

//--------------------------------------------------------


// need 1000 perosn obj


//var p1={name:"nag"};
//..........


//function Person(name,age){
//	this.name=name;
//	this.age=age;
//	this.sayName=function(){
//		console.log('im '+this.name);
//	};
//}
//
//var p1=new Person('Nag', 32);  // constructor-func invocation  ( this --> new-obj )
//var p2=new Person('Ria', 1);
//
//p1.sayName();
//p2.sayName();

//-------------------------------------------------------------




// in JS , we can invoke func in 4 ways

 /*
  *  1. function invocation   ( this ---> global-obj )
  *  2. method invocation     ( this ---> obj, who initiated execution-context )
  *  3. dynamic func binding invocation ( this --> arg-obj, who initiated execution-context )
  *  4. constructor invocation ( this --> new-obj )
  */

//-----------------------------------------------------------------












