(function($) {

	$(document).ready(function() {

	// Call these functions when the html has loaded.

	"use strict"; // Ensure javascript is in strict mode and catches errors.

		/*================================= 
		SOCIAL SHARE
		=================================*/

		/*== Facebook Share ==*/

		$('a.fb_share').click(function(e) {

			e.preventDefault();

			var loc = $(this).attr('href');

			window.open('http://www.facebook.com/sharer.php?u=' + loc,'facebookwindow','height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

		});

		$('a.twitter_share').click(function(e){

		    e.preventDefault();

		    var loc = $(this).attr('href');

		    var via = $(this).attr('via');

		    var title  = encodeURIComponent($(this).attr('title'));

		    window.open('http://twitter.com/share?url=' + loc + '&via=' + via, 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

		});

		/*=== LinkedIn Share ===*/

		$('a.linkedin_share').click(function(e){

			e.preventDefault();

			var loc = $(this).attr('href');

			var title = encodeURIComponent($(this).attr('title'));

			var excerpt  = encodeURIComponent($(this).attr('excerpt'));

			window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + loc + '&title=' + title + '&summary=' + excerpt);

		});

		/*================================= 
		FITVIDS
		=================================*/

		/*=== Wrap All Iframes with 'video_embed' for responsive videos ===*/

		$('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').wrap("<div class='video_embed'/>");

		/*=== Target div for fitVids ===*/

		$(".video_embed").fitVids();

	});

})(jQuery);