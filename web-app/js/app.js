/**
 * http://usejsdoc.org/
 */
//
//// using DOM API
//document.addEventListener('DOMContentLoaded', function(e) {
//
//	console.log('DOM ready.....');
//
//	var hideBtn = document.querySelector('.container .btn-danger');
//	var showBtn = document.querySelector('.container .btn-success');
//
//	var box = document.querySelector('.jumbotron');
//
//	hideBtn.addEventListener('click', function(e) {
//		box.style.display = 'none';
//	});
//	showBtn.addEventListener('click', function(e) {
//		box.style.display = 'block';
//	});
//
//});
//
//window.onload = function() {
//	console.log('onload...');
//};




//using jQuery

$(document).ready(function(){
	var hideBtn=$('.btn-danger');
	var showBtn=$('.btn-success');
	var box=$('.jumbotron');
	hideBtn.click(function(e) {
		box.hide();
	});
	showBtn.click(function(e) {
		box.show();
	});
	
	$('.date').datepicker();
	
});

//------------------------------



