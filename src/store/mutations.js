import CONSTANTS from "@/constants";

export default {
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
  },
  logout: state => {
    localStorage.clear();
    state.user = null;
  }
};
