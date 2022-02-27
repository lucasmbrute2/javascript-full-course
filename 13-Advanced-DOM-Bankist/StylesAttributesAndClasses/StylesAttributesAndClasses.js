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

const header = document.querySelector('.header');

const message = document.createElement('div'); // We are creating a div, that is not in our DOM yet.
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics';

message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // Insert before the element
header.append(message); // Insert after the element
// header.append(message.cloneNode(true)); // Copy an element

// header.before(message);
// header.after(message);

// Delete Elements

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.parentElement.removeChild(message);
  message.remove();
});

// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '105%';

console.log(message.style.color); // You cannot log styles that you not create
console.log(message.style.width); // This will work, returns 105%

console.log(getComputedStyle(message).color); // In this way will works

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // Increasing the height of the element

// Accessing CSS variables
// document.documentElement.style.setProperty('--color-primary', 'tomato');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt); // As in React, we are acessing the Element Attributes, its cool!
console.log(logo.className);
console.log(logo.src);
// logo.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1J8G6JKaDudRTBNa0hl1xzaERDky7sNbsg&usqp=CAU';

// Non-standard (creating attributes)

console.log(logo.getAttribute('designer')); // Retrieving the custom attribute from the element
logo.setAttribute('company', 'Bankist');
