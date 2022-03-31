
//Export
export.addToCart = (product, quantity) => {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};

//Import
const { addToCart } = require('./commonJS.js')