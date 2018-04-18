
$(document).ready(function(){

//function for hover an element
    $("nav ul.parent> li").hover(function(){
        $(this).css("color","#02baaa");

            },function(){
                $(this).css("color","");
    });

// function to toggle the submenu of a menu
	
	$('nav ul.parent> li').click(function(e){
		e.preventDefault();
		$(this).find('ul.child').stop().slideToggle('slow');
		
	return false;
    });
});
