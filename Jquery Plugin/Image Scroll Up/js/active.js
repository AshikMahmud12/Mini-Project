(function($) {
    "use strict";

    /*--------------------------------------
    	Image preview Active
    ----------------------------------------*/
    var divheight = $(".demo-img a").height();
    $(".demo-img").hover(function() {
            var objectheight = $(this).find(".preview-img").height();
            var objectheight1 = '-1' * objectheight;
            var finalheight = objectheight1 + divheight;
            $(this).find(".preview-img").css({ top: finalheight });
        },
        function() {
            $(this).find(".preview-img").css({ top: '0' });
        });

})(jQuery);