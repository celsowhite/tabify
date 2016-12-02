(function($){
	$.fn.tabify = function(options) {

		// Settings 

		var settings = $.extend({
            speed: 300,
        }, options );

		// Save variables to use

		var that = $(this);

		var items = $(this).find('.tab_items');

		var tabItem = $(this).find('.tab_items li');

		var content = $(this).find('.tab_content');

		// Set the inital state of the first tab to active

		items.find('li:first-child').addClass('active');

		// Set the first content area to active 

		content.children().eq(0).addClass('active');

		// Set the styling of the content

		content.children().not(':eq(0)').css('display', 'none');

		// Click function on a specific tab

		tabItem.click(function(){

			// Only trigger the tab change if the clicked tab isn't already active.

			if(!$(this).hasClass('active')) {

				// Save the name of the tab

				var tabName = $(this).attr('data-title');

				// Change the active tab

				that.find('.tab_items li.active').removeClass('active');

				$(this).addClass('active');

				// Change the active content

				$(that).find('.tab_content .active').fadeOut(settings.speed, function(){
					$(this).removeClass('active');

					// Fade in the clicked content

					$(that).find('#' + tabName).fadeIn(settings.speed, function(){
						$(this).addClass('active');
					});
				});
			}

		});

	};
}(jQuery));