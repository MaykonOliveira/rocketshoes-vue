import Vue from 'vue';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import VueToast from 'vue-toast-notification';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vue-toast-notification/dist/theme-default.css';

library.add(fas);
dom.watch();
Vue.use(VueToast, {
  position: 'top-right',
  duration: 3000,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
