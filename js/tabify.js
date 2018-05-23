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

		// Set variable to check if a content fade is already in progress

		var fadeInProgress;

		// Click function on a specific tab

		tabItem.click(function(){

			// Only trigger the tab change if the clicked tab isn't already active or another fade isn't in progress.

			if((!$(this).hasClass('active')) && (!fadeInProgress)) {

				// Indicate that a fade is in progress now that a tab has been clicked.

				fadeInProgress = true;

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
						
						// Indicate that the fade is done and another tab can now be clicked.

						fadeInProgress = false;
					});

				});
			}

		});
		
		// Activate Tab
        // Method that accepts a tabIndex as a parameter and will activate the appropriate tab.
        
        $.fn.tabify.activateTab = function(tabIndex) {
            
            // Change the active tab

            that.find('.tab_items li.active').removeClass('active');
            
            $(that).find('.tab_items > li:eq(' + tabIndex + ')').addClass('active');
                        
            // Change the active content

            $(that).find('.tab_content .active').fadeOut(settings.speed, function(){
                
                $(this).removeClass('active');

                // Fade in the tab content
                                
                $(that).find('.tab_content > div:eq(' + tabIndex + ')').fadeIn(settings.speed, function(){
                    $(this).addClass('active');
                });

            });
            
        }

	};
}(jQuery));