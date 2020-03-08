import Vue from "vue";
import Vuex from "vuex";

import STATE from "@/store/state";
import MUTATIONS from "@/store/mutations";
import GETTERS from "@/store/getters";
import ACTIONS from "@/store/actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: STATE,
  mutations: MUTATIONS,
  getters: GETTERS,
  actions: ACTIONS
});
