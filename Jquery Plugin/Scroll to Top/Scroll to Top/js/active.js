(function ($) {
"use strict";

/*--------------------------------------
	ScrollUp Active
----------------------------------------*/
$(function (){
	$.scrollUp({
		scrollName: 'scrollUp',
		topDistance: '300',
		topSpeed: 300,
		animation: 'fade',
		animationInSpeed: 300,
		animationOutSpeed: 300,
		scrollText: '<i class="fas fa-angle-up"></i>',
		activeOverlay: false,
	});
})

})(jQuery);	
