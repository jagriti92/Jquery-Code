$(document).ready(() => {
// function to toggle the accordion collapse
	$(".accordion> div > a").click(function(){
		if(false == $(this).next().is(':visible')){
			$('.accordion > div p').slideUp(300);
		}
	$(this).next().slideToggle(300);
	});

	$('.accordion > div p:eq(0)').show();
});