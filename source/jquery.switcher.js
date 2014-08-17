// Todo:
// Change pattern to string
// Run on iOS

(function($) {
	$.fn.switcher = function(options) {

		var settings = $.extend({
			iOS								: /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
			usernameFromURL 	: true, // or use data-username html attribute
			additionalSchemas : []
    }, options);

		// Define the native apps to deeplink
		var services = [
			{
				pattern	: /(facebook)/g,
				scheme	: function(username) {

					var facebookId = "";

					if(isNaN(parseInt(username)))
					{
						$.ajax({
							url			 : "https://graph.facebook.com/" + username,
							type 		 : "get",
							dataType : "json",
							async		 : false,
						}).done(function(response) {
							facebookId = response.id;
						});
					}
					else
					{
						facebookId = username;
					}

					return "fb://profile/" + facebookId;
				}
			},
			{
				pattern	: /(instagram)/g,
				scheme	: function(username) {
					return "instagram://user?username=" + username
				}
			},
			{
				pattern	: /(quirky)/g,
				scheme	: function(username) {
					return "quirky:///" + username
				}
			},
			{
				pattern	: /(twitter)/g,
				scheme	: function(username) {
					return "twitter://user?screen_name=" + username
				}
			},
		];

		// Add on any user defined schemas
		services = services.concat(settings.additionalSchemas);

		// Only run on iOS

		// Iterate through the set
    this.each(function() {

  		var $this  = $(this),
				href  	 = $(this).attr("href");

			if(settings.usernameFromURL)
				username = href.split(".com/")[1];
			else
				username = $this.data("username");

			$(services).each(function(i) {
				if(services[i].pattern.test(href))
				{
					$this.attr("href", services[i].scheme(username)); 
					return false;
				}
			});
    });

    return this;

	};
}(jQuery));
