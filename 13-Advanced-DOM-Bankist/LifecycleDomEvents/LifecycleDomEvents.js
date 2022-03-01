'use strict';

/* DOM content loaded

This event occurs when the user enters in the page. Ends when all the HTML and JS is downloaded (exepect images and external things)

*/
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree build!', e);
});

/* Load

This event occurs when ALL the content is loaded!

*/
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});
