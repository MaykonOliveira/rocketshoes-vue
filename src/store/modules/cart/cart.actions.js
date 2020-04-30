import Vue from 'vue';
import api from '@/services/api';

export default {
  addCartProduct({ commit }, product) {
    commit('addCartProduct', product);
  },
  removeCartProduct({ commit }, id) {
    commit('removeCartProduct', id);

    Vue.$toast.open({
      message: 'Produto removido',
      type: 'success',
    });
  },
  async updateProductAmount({ commit }, { id, amount }) {
    if (amount <= 0) {
      Vue.$toast.open({
        message: 'A quatidade mínima necessária é 1',
        type: 'error',
      });
      return;
    }

    const stockResponse = await api.get(`/stock?id=${id}`);
    const { amount: stockAmount } = stockResponse.data[0];

    if (amount > stockAmount) {
      Vue.$toast.open({
        message: 'A quantidade solicitada excede o existente em estoque',
        type: 'error',
      });
      return;
    }

    commit('updateProductAmount', { id, amount });
  },
};
