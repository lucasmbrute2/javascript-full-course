'use strict';

const h1 = document.querySelector('h1');

// Going downwards : child
console.log(h1.querySelectorAll('.highlight')); // You can select any deeper level of child elements
console.log(h1.childNodes); // Returns all the node's child
console.log(h1.children); // Returns all the element's child in a HTML Colletcion (only direct children)
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'tomato';
