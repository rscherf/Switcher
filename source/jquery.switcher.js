/************************************************
 * jQuery iOS App Switcher
 *  - by Ryan Scherf
 *
 * Convert your site's links to URL 
 * schemes to deeplink to iOS apps.
 ************************************************/

(function($) {
  $.fn.switcher = function(options) {

  // For prevention of Safari executing redirect if app is found
  window.hasHidden = false;
  $(window).bind("blur pagehide",  function() { window.hasHidden = true; });

  var settings = $.extend({
    additionalSchemas : [],
    debug             : false,
    iOS               : /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
  }, options);

  if(settings.iOS || settings.debug)
  {
    // Define the native apps to deeplink
    var services = [
      {
        pattern : /(facebook)/g,
        scheme  : function(username) {

          var facebookId = "";

          if(isNaN(parseInt(username)))
          {
            $.ajax({
              url       : "http://graph.facebook.com/" + username,
              type      : "get",
              dataType  : "json",
              async     : false,
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
        pattern : /(linkedin)/g,
        scheme  : function(username) {
          return "linkedin://#profile/" + username
        }
      },
      {
        pattern : /(instagram)/g,
        scheme  : function(username) {
          return "instagram://user?username=" + username
        }
      },
      {
        pattern : /(quirky)/g,
        scheme  : function(username) {
          return "quirky:///" + username
        }
      },
      {
        pattern : /(twitter)/g,
        scheme  : function(username) {
          return "twitter://user?screen_name=" + username
        }
      }
    ];

    // Add on any user defined schemas
    services = services.concat(settings.additionalSchemas);

    // Iterate through the set
    this.each(function() {

      var $this  = $(this),
      href       = $(this).attr("href"),
      identifier = href.split(".com/");

      if($this.data("username"))
        username = $this.data("username");
      else if(identifier.length > 1)
        username = identifier[1];
      else
        username = "notfound";

      $(services).each(function(i) {
        if(services[i].pattern.test(href))
        {
          $this.attr("href", services[i].scheme(username)); 

          // If visitor doesn't have the app, open the link
          $this.bind("click", function() {
            setTimeout(function() {
              if(!window.hasHidden) {
                window.location  = href;
              } else {
                window.hasHidden = false;
              }
            }, 1000);
          });

          return false;
        }
      });

    });

  }

  return this;

  };
}(jQuery));
