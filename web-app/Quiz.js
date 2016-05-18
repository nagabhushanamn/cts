/**
 * http://usejsdoc.org/
 */

function tng() {

	console.log('start tng...');
	var name = 'Nag';

	setTimeout(function() {
		try {
			console.log('after timeout...');
			// throw new Error('oops');
			console.log(name + " back to session");
		} catch (e) {
			console.log('i caught ' + e.message);
		}
	}, 5000);

	console.log('end tng...');

}

tng();