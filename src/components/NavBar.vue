<template>
  <nav class="navbar navbar-expand-lg navbar-light container">
    <router-link to="/home" class="navbar-brand">Conduit</router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">Home</router-link>
        </li>
        <li v-if="isUserLoggedIn" class="nav-item">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/editor" class="nav-link">
                <i class="fas fa-edit"></i>
                <span>New Article</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/settings" class="nav-link">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'/@' + user.username" class="nav-link">
                {{ user.username }}
              </router-link>
            </li>
          </ul>
        </li>
        <li v-else class="nav-item">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="signin" class="nav-link">Sign In</router-link>
            </li>
            <li class="nav-item">
              <router-link to="signup" class="nav-link">Sign Up</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["user", "isUserLoggedIn"]),
  },
};
</script>

<style scoped>
.fas {
  padding: 0 5px;
}

.navbar-brand {
  font-family: "Titillium Web", sans-serif;
  font-size: 12px;
  color: #3d8b3d;
  font-weight: bolder;
  transform: scale(2, 1.5);
}
</style>
