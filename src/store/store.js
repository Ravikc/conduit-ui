import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    auth: {
      isUserLoggedIn: true,
      userName: "ravi.kumar",
      jwtToken: ""
    }
  },
  getters: {
    auth: state => state.auth
  },
  actions: {
    setJwtToken: ({ commit }, token) => {
      commit("setJwtToken", token);
    }
  },
  mutations: {
    setJwtToken: (state, token) => {
      state.jwtToken = token;
    }
  }
});
