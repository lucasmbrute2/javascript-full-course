'use strict';

const Lucas = {
  firstName: 'Lucas',
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this.year >= 1990 && this.year <= 1996);
    };
    isMillenial(); // Nessa caso nós devemos utilizar a ARROW FUNCTION, pois a função normal retornaria UNDEFINED, explicado no arquivo 'index'. A ARROW FUNCTION por não ter o THIS, irá recorrer aos seus parentes que possuem, logo, terá acesso ao this do CalcAge.
  },
  greet: () => console.log(`Hey ${this.firstName}`), // Returns undefined cuz ARROW FUNCTION didnt has THIS keyword, so this will be attached to Window and dont exist 'FirstName' in window
};

Lucas.calcAge();
Lucas.greet();

//===== RESUMO=====

/*
ARROW FUNCTIONS -> Não possuem o THIS, então recorrem ao this do seus parentes (escopos que estão acima).

REGULAR FUNCTION -> Possuem o THIS, entretanto, se não tiverem associadas a um objeto, será retornado undefined.
*/

//ARGUMENTS
const showArguments = function (a, b) {
  console.log(arguments);
  return a + b;
};
showArguments(2, 4);
