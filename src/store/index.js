import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import cart from './modules/cart';

Vue.use(Vuex);

const strict = process.env.NODE_ENV !== 'production';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  strict,
  modules: {
    cart,
  },
  plugins: [vuexLocal.plugin],
});
