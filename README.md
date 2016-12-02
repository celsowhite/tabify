Tabify
===

Jquery tabs plugin. Easily create tab functionality and style the content however you'de like.

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

You must setup the following HTML structure for the plugin to work. The content in the tab items can be anything you'de like (icons, images, text, etc.)
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
        speed: 1000
    });
});
```
Settings
===

Currently there is only one setting, speed. More to come!

| Option        | Description           | Default  |
| ------------- |:-------------:| -----:|
| speed      | Set the speed of the tabs fade in/out transition | 300 |

Demo
===

[Basic Demo](http://celsowhite.com/tabify)

[See it in action on my portfolio homepage](http://celsowhite.com)
