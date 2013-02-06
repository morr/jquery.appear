# jQuery.appear

This is a total revamp of original jquery.appear plugin hosted on http://code.google.com/p/jquery-appear/

<a href="http://morr.github.com/appear.html">Demo page</a>

This plugin can be used to prevent unnecessary processeing for content that is hidden or is outside of the browser viewport.

It implements a custom *appear* event which is fired when an element became visible in the browser viewport.

        $('someselector').appear();
        $('someselector').on('appear', function() {
          // this element is now inside browser viewport
        });

If you want to fire *appear* event for elements which are close to vieport but are not visible yet, you may add data attributes *appear-top-offset* and *appear-left-offset* to DOM nodes.

        <div class="postloader" data-appear-top-offset="600">...</div> # appear will be fired when an element is below browser viewport for 600 or less pixels

Appear checking can be forced by calling *$.force_appear()*. This is usable in cases when page is in initial state (not scrolled and not resized) and you want manually trigger appearance check.

Also this plugin provides custom jQuery filter for manual checking element appearance.

        $('someselector').is(':appeared')

# License

> Licensed under <a href="http://opensource.org/licenses/MIT">MIT license</a>.
>
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.
