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

//** INDEXOF
console.log(airline.indexOf('r')); //Getting the position of the letter in the string.
console.log(airline.lastIndexOf('r')); //Getting the last ocurrency of the letter in the string
console.log(airline.indexOf('Portugal')); // This will return 8 because the String Portugal starts in the index 8

//** SLICE
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

//** Lower or Upper case

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fixing the string

const passenger = 'luCaS'; //we need fix this string, setting the first value upper case
const lowerString = passenger.toLowerCase();
const fixerFirstLetter = lowerString[0].toUpperCase() + lowerString.slice(1);

console.log(fixerFirstLetter);

//Check Email
const email = 'lucasmbrute614@gmail.com';
const loginEmail = '   Lucasmbrute614@Gmail.com  \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

if (email === normalizedEmail) console.log(`The e-mails are the same!`);

// **REPLACE

const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS);

const annoucement =
  'All passengers come to boarding door 23. Boarding door 23!';
const annoucementFixed = annoucement.replaceAll('door', 'gate');
// annoucementFixed = annoucement.replaceAll('/door/g', 'gate'); Another way with regex
console.log(annoucementFixed);

// **BOOLEANS
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo'))
  console.log('Part of the NEW Airbus family');

// **SPLIT

const string22 = 'dladoa'.split(''); //Split all the string into elements inside an array

console.log('a+very+nice+string'.split('+'));
console.log('Lucas Souza'.split(' '));

const [firstName, lastName] = 'Lucas Souza'.split(' ');
console.log(firstName, lastName);

//** JOIN

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = name => {
  const splitedName = name.split(' ');

  const arr = [];
  for (const n of splitedName) {
    arr.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(arr.join(' '));
};

capitalizeName('lucas victor de souza dantas');
capitalizeName('cleonice silva de souza');

//** PADDING

const message = 'Go to gate 23';
console.log(message.padStart(25, '+')); // The string will get the length 25 with the element specified (second parameter)
console.log('Lucas Victor'.padStart(25, '+'));
console.log(message.padStart(25, '+').padEnd(30, '+')); // We can do the same thing in the end

const maskCreditCard = function (number) {
  const str = number + ''; //coverting the number to string

  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(123676852498));

//** REPEAT

const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

//EXERCISES

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getStr = str => str.slice(0, 3).toUpperCase();

for (const element of flights.split('+')) {
  const [type, from, to, time] = element.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getStr(from)} to ${getStr(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}
