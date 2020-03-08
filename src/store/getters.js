export default {
  user: state => state.user,
  isUserLoggedIn: state => state.user && state.user.token
};
