$(document).ready(function() {
	




$(window).scroll(function(){
	if ($(this).scrollTop()>200){

		$(".menu").addClass('fixed');

	}   else{

			$(".menu").removeClass("fixed");


	}

});




});
