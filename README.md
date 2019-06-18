# jquery-appear-original

This is a total revamp of original jquery.appear plugin hosted on http://code.google.com/p/jquery-appear/

[Demo page](http://morr.github.com/appear.html)

This plugin can be used to prevent unnecessary processing for content that is hidden or is outside of the browser viewport.

It implements a custom *appear*/*disappear* events which are fired when an element became visible/invisible in the browser viewport.

## Installation

yarn

```sh
yarn add jquery-appear-original
```

npm

```sh
npm i -S jquery-appear-original
```

## Usage

```javascript
  $.appear('someselector', options); // It supports optional hash with "force_process" and "interval" keys. Check source code for details.

  $('<div>test</div>').appear(); // It also supports raw DOM nodes wrapped in jQuery.

  $('someselector').on('appear', function(event, $all_appeared_elements) {
    // this element is now inside browser viewport
  });
  $('someselector').on('disappear', function(event, $all_disappeared_elements) {
    // this element is now outside browser viewport
  });
```

If you want to fire *appear* event for elements which are close to viewport but are not visible yet, you may add data attributes *appear-top-offset* and *appear-left-offset* to DOM nodes.

```html
  <div class="postloader" data-appear-top-offset="600">...</div> # appear will be fired when an element is below browser viewport for 600 or less pixels
```

Appear check can be forced by calling *$.force_appear()*. This is suitable in cases when page is in initial state (not scrolled and not resized) and when you want manually trigger appearance check.

Also this plugin provides custom jQuery filter for manual checking element appearance.

```javascript
  $('someselector').is(':appeared')
```

## License
[MIT](http://opensource.org/licenses/MIT)
