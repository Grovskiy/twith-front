import Vue from 'vue';
import * as Vuex from 'vuex';
import user from '@/store/modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
  },
});

export default store;
