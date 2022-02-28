'use strict';

// Bubbling Phase

// In the bubbling phase the event will go through all the elements, in this case, from the Button to the document!

const body = document.body;
const button = document.querySelector('.nav__link--btn');

body.addEventListener('click', () => {
  alert('Clicou no body');
});

button.addEventListener('click', () => {
  alert('Clicou no botão');
});

// Notice that when we click in button, the body can listen the event
