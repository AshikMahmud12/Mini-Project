(function ($) {
"use strict";

/*--------------------------------------
	Page Piling Active
----------------------------------------*/
$('#pagepiling').pagepiling({
	direction: 'vertical',
	verticalCentered: true,
	scrollingSpeed:700,
	navigation:{
		'textColor':'#f2f2f2',
		'bulletsColor':'#ccc',
		'position':'right',
		'tooltips':['video', 'Intro', 'Welcome', 'Help'],
	},
	afterReader:function(){
		$('video').get(0).play();
	}
});


})(jQuery);	
