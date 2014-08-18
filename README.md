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

Some apps (liked LinkedIn) require an `id` to access, and not the pretty username.

```
<a class="linkedin" href="http://linkedin.com/ryanscherf" data-username="10998304">
  @ryanscherf on LinkedIn
</a>
```

Switcher will scan all the links in the set and determine if any can be deeplinked to native apps. If a username can't be derived from a URL pattern, Switcher will look for the `data-username` attribute.


Options/Settings
------------
Option | Default | Description
------ | ------- | ---------------------------------------------
`debug`| `false` |Converts links on non-iOS devices for testing
`iOS`  | `iPhone, iPod, iPad` | Defines the `navigator.userAgent` to look for on iOS
`additionalSchemas` | An array of patterns and schemes for additional native apps


Contribute
------------
I don't use every app, so I didn't include all the app URL schemes available to the world. Want to add more? Do it.

1. Fork/clone the repository
2. Add whatever you'd like
3. Submit a Pull Request



Copyright
------------
1. Star the Github repository
2. Follow http://twitter.com/ryanscherf on Twitter and tell me how much you love this plugin
3. Use it however you'd like


