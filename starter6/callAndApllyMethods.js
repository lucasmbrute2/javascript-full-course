'use strict';
/*THIS keyword in a function needs to be an method, otherwise its will return undefined.
*In ARROW FUNCTIONS the THIS keyword returns the parent THIS.
*In a regular function returns undefined.
*In a method returns the object(owner)

*/
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
console.log(gol);

gol.book(239, 'Lucas Souza');
gol.book(635, 'Lucas Victor');

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = gol.book; //This is the new function "book"

/*
Returns undefinez cuz its a regular function now, not a method.
book(23, 'Bruna Silva');

So, instead of just doing this, we can make THIS:
*/
book.call(euroWings, 23, 'Bruna Silva');
