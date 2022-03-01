'use strict';

/* ==========DOM content loaded===================

This event occurs when the user enters in the page. Ends when all the HTML and JS is downloaded (exepect images and external things)

*/
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree build!', e);
});

/* ======================Load======================

This event occurs when ALL the content is loaded!

*/
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

/*=================Before unload===============

This event occurs before the user leave the page!

*/

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = ''; // Asking before the user leave the site
}); // DON'T ABUSE THAT, ONLY USES IF USER WILL LOSES DATA (like writing an email and exits for accident the page.)
