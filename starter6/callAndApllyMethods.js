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
  },
};

gol.book(239, 'Lucas Souza');
gol.book(635, 'Lucas Victor');
