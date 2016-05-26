/**
 * http://usejsdoc.org/
 */
// conf.js
exports.config = {
	framework : 'jasmine',
	seleniumAddress : 'http://localhost:4444/wd/hub',
	specs : [ 'test/e2e/calc-spec.js' ],
	multiCapabilities : [ {
		browserName : 'firefox'
	}, {
		browserName : 'chrome'
	} ]
};