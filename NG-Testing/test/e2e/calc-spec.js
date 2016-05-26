/**
 * http://usejsdoc.org/
 */

describe('Calc - App', function() {

	it('should have a title', function() {
		browser.get('http://localhost:8080');
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
	
	it('should add one and two', function() {
	    
		browser.get('http://localhost:8080');
	    
		element(by.model('first')).sendKeys(1);
	    element(by.model('second')).sendKeys(2);

	    element(by.id('gobutton')).click();

	    expect(element(by.binding('latest')).getText()).toEqual('3'); 
	    
	    
	  });
	
});