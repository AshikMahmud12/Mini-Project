(function ($) {
"use strict";

/*--------------------------------------
	Jquery Modal Active
----------------------------------------*/
$('.popup-button a').click(function(event){
	$(this).modal({
		fadeDuration: 250,
		fadeDelay: 1.75
	});
	return false;
});

})(jQuery);	
