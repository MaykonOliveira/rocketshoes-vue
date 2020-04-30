import formatCurrency from '@/util/formatCurrency';

export default {
  addCartProduct(state, payload) {
    const productIndex = state.cart.findIndex(product => product.id === payload.id);

    if (productIndex === -1) {
      const subTotalFormatted = formatCurrency(payload.price);

      state.cart.push({
        ...payload,
        amount: 1,
        subTotalFormatted,
        subTotal: payload.price,
      });
    } else {
      const productFind = state.cart[productIndex];

      const amount = productFind.amount + 1;
      const subTotal = productFind.price * amount;
      const subTotalFormatted = formatCurrency(subTotal);

      const productUpdated = {
        ...productFind,
        amount,
        subTotal,
        subTotalFormatted,
      };

      state.cart.splice(productIndex, 1, productUpdated);
    }
  },
};
