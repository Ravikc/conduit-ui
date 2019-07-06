import Vue from "vue";
import Vuex from "vuex";
import CONSTANTS from "@/constants";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      email: null,
      token: null,
      username: null,
      bio: null,
      image: null
    }
  },
  getters: {
    user: state => state.user,
    isUserLoggedIn: state => state.user.token
  },
  actions: {
    setUser: ({ commit }, user) => {
      commit("setUser", user);
    },
    setUserFromLocalStorage: ({ commit }) => {
      commit("setUserFromLocalStorage");
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
      localStorage.setItem(
        CONSTANTS.LOCAL_STORAGE_USER_INFO_KEY,
        JSON.stringify(user)
      );
    },
    setUserFromLocalStorage: state => {
      const user = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_USER_INFO_KEY);
      state.user = JSON.parse(user);
    }
  }
});
