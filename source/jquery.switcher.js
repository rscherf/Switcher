$(document).ready(function() {

	var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);

		var services = [
			{
				pattern: /(twitter)/g,
				scheme: function(username) {
					return "twitter://user?screen_name=" + username
				}
			},
			{
				pattern: /(facebook)/g,
				scheme: function(username) {
					var facebookId = "";

					$.ajax({
						type: "get",
						async: false,
						dataType: "json",
						url: "https://graph.facebook.com/" + username,
					}).done(function(response) {
						facebookId = response.id;
					});

					return "fb://profile/" + facebookId;
				}
			},
			{
				pattern: /(instagram)/g,
				scheme: function(username) {
					return "instagram://user?username=" + username
				}
			},
			{
				pattern: /(quirky)/g,
				scheme: function(username) {
					return "quirky:///" + username
				}
			}
		];

		$(".social a").each(function(i) {
			var $this = $(this);

			var href = $(this).attr('href');

			$(services).each(function() {
				if(services[i].pattern.test(href))
				{
					$this.attr("href", services[i].scheme("ryanscherf")); 
					return false;
				}
			});
		});


		// console.log(services.twitter.pattern.test(url))
		// console.log(services.twitter.scheme('ryanscherf'))
		// console.log(services.facebook.scheme('ryanscherf'))

	//http://stackoverflow.com/questions/9038625/detect-if-device-is-ios

});