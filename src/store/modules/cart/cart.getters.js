export default {
  cart: state => state.cart,
  amount: state =>
    // eslint-disable-next-line implicit-arrow-linebreak
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
};
