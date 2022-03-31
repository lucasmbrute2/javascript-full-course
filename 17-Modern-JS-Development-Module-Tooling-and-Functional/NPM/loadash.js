// import cloneDeep from '/node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 5,
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

if (module.hot) module.hot.accept(); // Makes the page do not reload!
