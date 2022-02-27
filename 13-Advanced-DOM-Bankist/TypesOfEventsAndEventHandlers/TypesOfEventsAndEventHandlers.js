'use strict';

const h1 = document.querySelector('h1');

const alertH1 = () => {
  alert('Olá');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1); // Allows multiple EventListener in the same event.

// Bad Practice

// h1.onmouseenter = () => {
//   alert('Olá2');
// }; // DON'T USE THAT
