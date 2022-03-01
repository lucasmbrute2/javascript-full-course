'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect(); //Gets the coordenates of the element based on the viewport
  console.log(s1coords);

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'Height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //========================Scrolling=====================

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern Way

  section1.scrollIntoView({ behavior: 'smooth' });
});

//=======================Page Navigation====================

// document.querySelectorAll('.nav__link').forEach(element =>
//   element.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('link');

//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

/* Event delegation
  1. Add evenet listener to common parent element 
  2. Determine what element originated the event 

*/

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');

  // Ignore clicks that didn't came from desired element

  if (id) document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

//========================Tabbed component====================

// We are acessing all the 'tabs' for you parent element
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // Closest is necessary receive only the button without the span

  // Moving up the button that was clicked
  if (!clicked) return;

  // Remove activate classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  // Activate content area
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//=================Menu fade animation========================

const handleEachEvent = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleEachEvent(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleEachEvent(e, 1);
// });

nav.addEventListener('mouseover', handleEachEvent.bind(0.5));

nav.addEventListener('mouseout', handleEachEvent.bind(1));

//==================Sticky navigation===================

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Sticky navigation with Intersection Observer API

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // Especify a gap of 90px to call the function
});

headerObserver.observe(header);

//=====================Revealing Elements on Scroll===================
const sections = document.querySelectorAll('section');

const showSections = (entries, observer) => {
  // Entries are relative to the threshold

  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(showSections, {
  root: null,
  threshold: 0.15,
});

sections.forEach(section => sectionObserver.observe(section));

//======================Lazy loadings Image===========================

const images = document.querySelectorAll('img[data-src]');

const loadImg = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry.target.dataset.src);

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

images.forEach(img => imageObserver.observe(img));

//=============================Slider=================================

const slides = document.querySelectorAll('.slide');
const btnLft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');

let currSlide = 0;
const maxSlide = slides.length;

function goToSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
}

// Showing the slides

goToSlide(0);

// Next slide

function nextSlide() {
  if (currSlide === maxSlide - 1) currSlide = 0;
  else currSlide++;

  goToSlide(currSlide);
}

function previousSlide() {
  if (currSlide === 0) currSlide = maxSlide - 1;
  else currSlide--;

  goToSlide(currSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLft.addEventListener('click', previousSlide);
