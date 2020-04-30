export default {
  addCartProduct({ commit }, product) {
    commit('addCartProduct', product);
  },
  updateProductAmount({ commit }, { id, amount }) {
    commit('updateProductAmount', { id, amount });
  },
};
