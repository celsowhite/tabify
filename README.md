Tabify
===

Jquery tabs plugin. Easily create tab functionality and style the content however you'd like. 

I created this because I constantly create different tabs style content on websites. In some cases, I also need the ability to connect my tabs with other API's like [Slick Carousel](https://github.com/kenwheeler/slick) and [Flexslider](https://github.com/woocommerce/FlexSlider).

The goal is to keep it simple, flexible and customizable.

Installation
===

Download the plugin script js/tabify.min.js from this repo.
Insert the script tag into your code. 

```javascript
<script src="tabify.min.js" type="text/javascript"></script>
```
Make sure that you have jquery installed and the script that calls the Tabify plugin is placed after it has been initialized.

HTML Structure
===

You must setup the following HTML structure for the plugin to work. The content in the tab items and content can be anything you'd like (icons, images, text, etc.) The 'tabs_container' can be named anything you choose. Be sure to set the right jquery element when initializing the plugin.

**Tip**: I normally have multiple instances of this on a single site and need to style them all very differently. Add your own classes to the tab_items and tab_content divs in addition to the classes that are already there. Do all the styling in CSS with those classes. Leave tab_items and tab_content as purely functional.

```html
<div class="tabs_container">
    <ul class="tab_items">
        <li data-title="tabs_content_1">Tab #1 Link</li>
        <li data-title="tabs_content_2">Tab #2 Link</li>
        <li data-title="tabs_content_3">Tab #3 Link</li>
    </ul>
    <div class="tab_content">
        <div id="tabs_content_1">Tab #1</div>
        <div id="tabs_content_2">Tab #2</div>
        <div id="tabs_content_3">Tab #3</div>
    </div>
</div>
```

Jquery Initialization
===

```javascript
$(document).ready(function(){
    $('.tabs_container').tabify({
        speed: 100
    });
});
```
Settings
===

Currently there is only one setting, speed. More to come!

| Option        | Description                                      | Default  |
| ------------- | ------------------------------------------------ | ---------|
| speed         | Set the speed of the tabs fade in/out transition | 300      |

Demo
===

[Basic Demo](http://celsowhite.com/tabify)

[See it in action on my portfolio homepage](http://celsowhite.com)
