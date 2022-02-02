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
