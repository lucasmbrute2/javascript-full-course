'use strict';

// Bubbling Phase

// In the bubbling phase the event will go through all the parent (not sibling) elements , in this case, from the Button to the document!

const body = document.body;
const button = document.querySelector('.nav__link--btn');
const document2 = document.documentElement;

document2.addEventListener('click', e => {
  alert('Clicou no document');
  console.log(e.target);
});

body.addEventListener('click', e => {
  alert('Clicou no body');
  console.log(e.target);
});

button.addEventListener('click', e => {
  alert('Clicou no botão');
  console.log(e.target);
});

// Notice that when we click in button, the body can listen the event and the target is the same (Element that was clicked )
