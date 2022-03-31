// exporting module
console.log('exporting module');

// To export variables we need to export with the keyword
const shippingCost = 10;
const cart = [];

export const addToCart = (product, quantity) => {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 413;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

const app = () => {
  console.log(cart);
};

export default app;
