export default {
  addCartProduct({ commit }, product) {
    commit('addCartProduct', product);
  },
  removeCartProduct({ commit }, id) {
    commit('removeCartProduct', id);
  },
  updateProductAmount({ commit }, { id, amount }) {
    commit('updateProductAmount', { id, amount });
  },
};
