/**
 * http://usejsdoc.org/
 */

function batch1() {

	var name = 'Nag';

	console.log('batch-1 started....');

	console.log('scheduling...batch-2');

	setTimeout(function() {
		console.log('started batch-2 by ' + name);
	}, 5000);

	console.log('batch-1 finished...');
}

batch1();