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

const declaration = function () {
  return true;
};
//-> Function DECLARATION
function Expression() {
  return true;
}

//-> ARROW FUNCTION
const declaration = () => {
  return true;
};

// Hoisting make some kind of variable acessible in the code, in fact, before were declared

// FUNCTION DECLARATIONS are Hoistable, VAR variables either.

//Function Expressions and Arrows
