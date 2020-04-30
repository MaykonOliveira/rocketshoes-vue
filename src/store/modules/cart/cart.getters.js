/* eslint-disable implicit-arrow-linebreak */
import formatCurrency from '@/util/formatCurrency';

export default {
  cart: state => state.cart,
  amount: state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
  total: state =>
    formatCurrency(state.cart.reduce((sumTotal, product) => product.subTotal + sumTotal, 0)),
};
