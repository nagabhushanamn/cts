/**
 * http://usejsdoc.org/
 */

/*
 * A closure is a function having access to the parent scope,even after the
 * parent function has closed.
 * 
 * 
 * why we need closure?
 * 
 * 2 uses
 * 
 * --> to expose public-behav of any module , by hiding private members.
 * --> to access parent-scoped data , while executing func asynch
 * 
 * 
 */

function teach() {

	console.log('teach-start...');
	var notes = 'JS notes';

	function learn() {
		console.log('learning with ' + notes);
	}

	console.log('teach-end...');

	return learn;

}

var learnFunc = teach();

learnFunc();
learnFunc();