export default {
  amount: state =>
    // eslint-disable-next-line implicit-arrow-linebreak
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
};
