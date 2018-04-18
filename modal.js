$(document).ready(() =>{
// function to show the modal
	$('.open').click(() =>{
	$('.content').show(500);
	$('.open').hide();
	});
// function to hide the modal
	$('.btn').click(() =>{
	$('.content').hide(500);
	$('.open').show();
	});

});
