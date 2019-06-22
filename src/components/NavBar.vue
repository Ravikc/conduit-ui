<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">Conduit</a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item" v-if="auth.isUserLoggedIn">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-edit"></i>
                <span>New Article</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{ auth.userName }}</a>
            </li>
          </ul>
        </li>
        <li class="nav-item" v-else>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Sign In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign Up</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["auth"]),
    ...mapActions(["setJwtToken"])
  }
};
</script>

<style scoped>
.fas {
  padding: 0 5px;
}

.navbar-brand {
  font-family: "Titillium Web", sans-serif;
  color: #3d8b3d;
  font-weight: bolder;
  transform: scale(2, 1.5);
}
</style>
