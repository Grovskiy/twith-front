import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

require('@/store/subscriber');

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

store.dispatch('attempt', localStorage.getItem('token'));

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
