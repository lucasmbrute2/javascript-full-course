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
    const fixedName = n[0].toUpperCase() + n.slice(1);
    arr.push(fixedName);
  }
  console.log(arr.join(' '));
};

capitalizeName('lucas victor de souza dantas');
capitalizeName('cleonice silva de souza');
