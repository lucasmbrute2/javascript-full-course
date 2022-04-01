// import cloneDeep from '/node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 1,
    },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state); // It is a shallow copy
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone); // In this clone object is not muted
class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting} ${this.name}`);
  }
}
const lucas = new Person('Lucas');
const Souza = new Person('Souza');

const newArr = [...state.cart];
console.log('Lucas' ?? null);
const { product, quantity } = state.cart.find(el => el.quantity === 5);

if (module.hot) module.hot.accept(); // Makes the page do not reload!
