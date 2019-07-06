<template>
  <div>
    <nav-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import CONSTANTS from "@/constants";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    NavBar
  },
  created() {
    const userInfo = localStorage.getItem(
      CONSTANTS.LOCAL_STORAGE_USER_INFO_KEY
    );
    if (userInfo) {
      this.setUser(JSON.parse(userInfo));
    }
  },
  methods: {
    ...mapActions(["setUser"])
  }
};
</script>

<style scoped></style>
