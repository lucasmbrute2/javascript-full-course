'use strict';

// STUDYING SCOPE
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `You're a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Lucas';
calcAge(1994);

/* STUDYING HOW HOISTING WORKS

-> First, talking about functions, there are function EXPRESSIONS, they are =>*/

const expression = function () {
  return true;
};
//-> Function DECLARATION
function Declaration() {
  return true;
}

//-> ARROW FUNCTION
const expressionArrow = () => {
  return true;
};

// Hoisting make some kind of variable acessible in the code, in fact, before they're declared

// FUNCTION DECLARATIONS are Hoistable, your value is the Actual funtion, VAR variables either, your value is undefined.

//TDZ -> Temporal Dead Zone- > Is the scope area that can't be accesses, such as example:

const myName = 'Lucas';

if (myName === 'Lucas') {
  console.log('Eu sou o Lucas'); //
  const age = 21; //
  console.log(age); //
  const job = 'Software Engineer';
}

// Note that const 'job' cannot be accesses in lines 49,50,51, because those lines are the TDZ

/*WHY HOISTING EXISTS? 

Hoisting exists to use functions declaration before we declare them, such as example: 
*/

hoistingFunction();

function hoistingFunction() {
  console.log('Yeah, this was hoisted');
}

//Lets get some examples with variables:

console.log(me); // was hoisted wich value undefined
// console.log(job); // log error
// console.log(year);//log error

var me = 'Lucas';
let job = 'Dev';
const year = 2000;

// Now wich functions:

console.log(addDecal(2, 3)); // was hoisted

function addDecal(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArror = (a, b) => a + b;

//Cool stuff

// A variable declared with VAR will be able in window, such as the example:

var x = 1;

console.log(x === window.x); // the response is true

//==================================================================
//TALKING ABOUT --- THIS---------

// The THIS keyword/variable: Special variable that is created for every execution context (every function). Takes the value of the "owner" of the function that this is  called.

//THIS IS NOT STATIC. It depends how on the function is called, and its value is only assisgned when the function is actually called.

const obj = {
  name: 'lucas',
  coolFunc: function () {
    return this.name;
  },
};

console.log(obj.coolFunc());

//THIS DOESN'T WORKS WICH ARROW FUNCTION

const calcAge2 = function () {
  console.log('alo');
  console.log(this);
};

calcAge2(); // This will return undefined, cuz didnt has a owner.

const calcAge3 = () => {
  console.log('alo');
  console.log(this);
};
calcAge3(); // It will return window, cuz arrown function DIDNT HAS THIS KEY WORD

// =====OBJECT BORROWING=========

const Lucas = {
  year: 2000,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};

Lucas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = Lucas.calcAge; // We created a key CalcAge in matilda with CalcAge method from  Lucas

matilda.calcAge(); // RETURN 20 cuz the THIS keyword get the matilda year reference.
