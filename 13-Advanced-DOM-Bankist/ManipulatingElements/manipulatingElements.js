'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

document.querySelector('.section');
const allSections = document.querySelectorAll('.section'); // Returns a NodeList, is not automatically updated
console.log(allSections);

document.getElementById('section--1');
const buttons = document.getElementsByTagName('button'); // Returns a HTML Collection -> Is automatically updated
console.log(buttons);

console.log(document.getElementsByClassName('btn')); // Returns a HTML Colletion

// Creating and Inserting elements
// .intertAdjacentHTML for example

const message = document.createElement('div'); // We are creating a div, that is not in our DOM yet.
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics';

message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // Insert before the element
header.append(message); // Insert after the element
// header.append(message.cloneNode(true)); // Copy an element

header.before(message);
header.after(message);

// Delete Elements

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.parentElement.removeChild(message);
  message.remove();
});
