import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { User, UserState } from '@/interfaces/UserInterface';
import UserService from '@/services/UserService';
import PostService from '@/services/PostService';
import router from '@/router';

const state: UserState = {
  token: null,
  user: null,
};

const getters: GetterTree<any, any> = {
  authenticated(state: UserState) {
    return Boolean(state.token);
  },
  user(state: UserState) {
    return state.user;
  },
};

const mutations: MutationTree<any> = {
  logoutSuccess(state: UserState) {
    state.user = null;
  },
  setUser(state: UserState, user: User) {
    state.user = user;
  },
  setToken(state: UserState, token) {
    state.token = token;
  },
};

const actions: ActionTree<any, any> = {
  async signIn({ commit, dispatch }, credentials) {
    const response = await UserService.signIn(credentials);

    commit('setUser', response.data);
    return dispatch('attempt', response.data.token);
  },

  async signUp(_, credentials) {
    const response = await UserService.registration(credentials);

    console.log(response);
  },

  async attempt({ commit, state }, token) {
    if (token) {
      commit('setToken', token);
    }

    if (!state.token) {
      return;
    }

    try {
      await PostService.posts();
      await router.replace({ name: 'PostPage' });
    } catch (e) {
      commit('setUser', null);
      commit('setToken', null);
    }
  },

  signOut({ commit }) {
    commit('setUser', null);
    commit('setToken', null);
    if (router.currentRoute.name !== 'Auth') {
      router.push({ name: 'Auth' });
    }
  },
};

const user = {
  state,
  getters,
  mutations,
  actions,
};

export default user;
