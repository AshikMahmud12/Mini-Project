(function($) {
    "use strict";

    /*--------------------------------------
    	Slidebar Active
    ----------------------------------------*/
    // Create a new instance of Slidebars
    var controller = new slidebars();

    // Initialize Slidebars
    controller.init();

    // Top Slidebar controls
    $('.js-toggle-top').on('click', function(event) {
        event.stopPropagation();
        controller.toggle('top-slidebar');
    });
    // left Slidebar controls
    $('.js-toggle-left').on('click', function(event) {
        event.stopPropagation();
        controller.toggle('left-slidebar');
    });
    // Right Slidebar controls
    $('.js-toggle-right').on('click', function(event) {
        event.stopPropagation();
        controller.toggle('right-slidebar');
    });
    // BOttom Slidebar controls
    $('.js-toggle-bottom').on('click', function(event) {
        event.stopPropagation();
        controller.toggle('bottom-slidebar');
    });


    // Close any
    $(controller.events).on('opened', function() {
        $('[canvas="container"]').addClass('js-close-any-slidebar');
    });

    $(controller.events).on('closed', function() {
        $('[canvas="container"]').removeClass('js-close-any-slidebar');
    });

    $('body').on('click', '.js-close-any-slidebar', function(event) {
        event.stopPropagation();
        controller.close();
    });

})(jQuery);