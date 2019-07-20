import Vue from "vue";
import Router from "vue-router";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Profile from "./views/Profile";
import Settings from "./views/Settings";
import ArticleList from "./views/ArticleList";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    },
    {
      path: "/@:userName",
      name: "profile",
      component: Profile,
      children: [
        {
          path: "favourites",
          component: ArticleList
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
