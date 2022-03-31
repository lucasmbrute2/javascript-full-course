const ShoppingCart = (() => {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = (product, quantity) => {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// We only still have access to Shopping cart, even after the execution of the IIFE was alerady done, because of 'CLOSURE'

ShoppingCart.addToCart('apple', 4);
ShoppingCart.orderStock('apple', 4); // We can't use this orderStock function because was not returned
