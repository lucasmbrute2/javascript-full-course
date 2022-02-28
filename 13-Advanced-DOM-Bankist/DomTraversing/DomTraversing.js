'use strict';

const h1 = document.querySelector('h1');

// Going downwards : child
console.log(h1.querySelectorAll('.highlight')); // You can select any deeper level of child elements
console.log(h1.childNodes); // Returns all the node's child
console.log(h1.children); // Returns all the element's child in a HTML Colletcion (only direct children)
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'tomato';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-primary)'; // Matching the closest element no matter how far away it is in DOM Tree

/* 
    querySelector vs closest

    'qurySelector' finds the first child, no matter how deep while 'closest' finds the first parent, no matter how deep
*/
