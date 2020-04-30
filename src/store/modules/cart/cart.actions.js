import Vue from 'vue';
import api from '@/services/api';

async function addCartProduct({ commit, dispatch }, { product, amount }) {
  commit('addCartProduct', product);

  await dispatch('updateProductAmount', { id: product.id, amount });
}

function removeCartProduct({ commit }, id) {
  commit('removeCartProduct', id);

  Vue.$toast.open({
    message: 'Produto removido',
    type: 'success',
  });
}

async function updateProductAmount({ commit }, { id, amount }) {
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
}

export default {
  addCartProduct,
  removeCartProduct,
  updateProductAmount,
};
