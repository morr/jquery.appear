/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.1
 */
(function($) {
  var data = {};
  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250
  }
  var $window = $(window);
  var $document = $(document);

  function check_appearance(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  }

  function process() {
    check_lock = false;
    for (var selector in data) {
      var $appeared = $(_.select($(selector), function(v,k) {
        return check_appearance(v);
      }));
      if ($appeared.length) {
        if (data[selector]) {
          data[selector]($appeared);
        } else {
          $appeared.trigger('appear', $appeared);
        }
      }
    }
  }

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(callback, options) {
      $.extend(defaults, options || {});
      if (!check_binded) {
        $(window).scroll(function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          _.delay(process, defaults.interval);
        });
        check_binded = true;
      }

      _.delay(process, defaults.interval);
      data[this.selector] = callback;
      return $(this.selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      };
      return false;
    }
  });
})(jQuery);
