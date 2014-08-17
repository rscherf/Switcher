Switcher
============
A jQuery plugin that converts regular links to iOS app URL schemes so your visitors can visit your social profiles in native apps.

Converts HTML href attributes like: `http://twitter.com/ryanscherf` to `twitter://user?screen_name=ryanscherf`

Written by Ryan Scherf : http://ryan.sc - http://twitter.com/ryanscherf

Requirements
------------
Originally written with jQuery 2.X, but is probably backwards compatible.

Script is only enabled on iOS devices (iPhone, iPod and iPad) based on browser userAgent.


Usage
------------
Markup your social profile links:
```
<div class="social">
  <a href="http://twitter.com/ryanscherf">@ryanscherf</a>
</div>
```

Target them with a single jQuery selector:
```
$(".social a").switcher();
```

*OR*

```
<a class="twitter" href="http://twitter.com/ryanscherf" data-username="ryanscherf">
  @ryanscherf
</a>
```

And default to using the `data-username` attribute instead of the URL:

```
$("a.twitter").switcher({
  usernameFromURL: false
});
```

Switcher will scan all the links in the set and determine if any can be deeplinked to native apps.



Contribute
------------
I don't use every app, so I didn't include all the app URL schemes available to the world. Want to add more? Do it.

1. Fork/clone the repository
2. Add whatever you'd like
3. Submit a Pull Request



Copyright
------------
1. Star the Github repository
2. Follow http://twitter.com/ryanscherf on Twitter
3. Use it however you'd like


