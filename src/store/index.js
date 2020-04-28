import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart';

Vue.use(Vuex);

const strict = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict,
  modules: {
    cart,
  },
});
