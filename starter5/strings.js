'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

//String are iterable
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]); //Getting imediatly the position

console.log(plane.length); //You can get the o length of that.
console.log('B737'.length);

//======METHODS======

//* IndexOf
console.log(airline.indexOf('r')); //Getting the position of the letter in the string.
console.log(airline.lastIndexOf('r')); //Getting the last ocurrency of the letter in the string
console.log(airline.indexOf('Portugal')); // This will return 8 because the String Portugal starts in the index 8

//* Slice
console.log(airline.slice(4)); //This will start to extract in position 4
console.log(airline.slice(4, 7)); //This will start to extract in position 4 since position 7

//Slice without hard-code the position
console.log(airline.slice(0, airline.indexOf(' '))); // Slice from positon 0 to blank splace's position
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Slice from back to front, in last blank space

//Slice starting from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeats = (name, seat) => {
  //B and E are middle Seats

  const s = seat.slice(-1); //We get the last element
  if (s !== 'E') console.log(`${name} is sitting in the middle`);
  else console.log(`${name} isn't sitting in the middle`);
};

checkMiddleSeats('Lucas', '11B');
checkMiddleSeats('Carlos', '23C');
checkMiddleSeats('Marcelo', '3E');
