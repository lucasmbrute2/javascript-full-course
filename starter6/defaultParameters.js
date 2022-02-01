'use strict';

const booking = [];

//Setting default values to parameters

const createBooking = function (
  flightNum = 30,
  numPassengers = 15,
  price = 199 * numPassengers //This only works for parameters that are defined in the list before this one.
) {
  const bookings = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(bookings);
  booking.push(bookings);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', undefined, 2); //Skiping a parameter to set the default
