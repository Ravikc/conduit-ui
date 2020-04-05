export default {
  setUser: ({ commit }, user) => {
    commit("setUser", user);
  },
  setUserFromLocalStorage: ({ commit }) => {
    commit("setUserFromLocalStorage");
  },
  logout: ({ commit }) => {
    commit("logout");
  },
};
