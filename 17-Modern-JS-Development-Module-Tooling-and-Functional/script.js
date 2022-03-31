//importing module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);
console.log('importing module');
import * as ShoppingCart from './shoppingCart.js';
import app from './shoppingCart.js';

ShoppingCart.addToCart('bread', 4);
app();
