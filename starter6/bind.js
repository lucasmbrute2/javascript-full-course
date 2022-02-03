'use strict';

const gol = {
  airline: 'Gol',
  iataCode: 'GL',
  bookings: [],
  // book: function(){},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = gol.book;
book.call(euroWings, 203, 'Lucas'); //Paste example
//**BIND
const bookEW = book.bind(euroWings); // differently of CALL and APPLY method, bind create a new function, he doest not call the 'book' function, instead return a new one.
const bookLX = book.bind(swiss);
const bookGL = book.bind(gol);

bookEW(45, 'Lucas Bind');
bookLX(906, 'LX book');
bookGL(21, 'GL book');

// const binded = book.call(book, 200, 'Book binded'); //You can bind the THIS keyword for itself, in this case "book" of line 28.

//In bind we can pass another arguments after the function, in this case, setting the first argument wit 23 and passing the name later.
const bookEW23 = book.bind(euroWings, 23);
bookEW23('Martha');
bookEW23('Jonas');

//===========ANOTHER EXAMPLES TO USE BIND METHOD=========
//* With Event Listeners
gol.planes = 300;
gol.buyPlane = function () {
  console.log(this); //This THIS keyword are poiting to the handler function, in this case the button.

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', gol.buyPlane.bind(gol));
