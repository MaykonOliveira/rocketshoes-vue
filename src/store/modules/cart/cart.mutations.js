import formatCurrency from '@/util/formatCurrency';

function updateProduct(state, productIndex, amount) {
  const productFind = state.cart[productIndex];
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

export default {
  addCartProduct(state, payload) {
    const productIndex = state.cart.findIndex(product => product.id === payload.id);
    if (productIndex === -1) {
      state.cart.push({
        ...payload,
      });
    }
  },
  updateProductAmount(state, payload) {
    const productIndex = state.cart.findIndex(product => product.id === payload.id);
    updateProduct(state, productIndex, payload.amount);
  },
  removeCartProduct(state, id) {
    const productIndex = state.cart.findIndex(product => product.id === id);
    state.cart.splice(productIndex, 1);
  },
};
