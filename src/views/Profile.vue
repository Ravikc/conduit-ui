<template>
  <div>
    <section class="container-fluid px-0">
      <div class="jumbotron jumbotron-fluid py-4">
        <div class="container profile-info-container">
          <div class="row mx-auto justify-content-center">
            <img
              class="profile-picture"
              src="https://static.productionready.io/images/smiley-cyrus.jpg"
            />
          </div>
          <div class="row justify-content-center">
            <span class="user-name"> {{ user.username }} </span>
          </div>
          <div class="row justify-content-end">
            <button
              class="btn btn-outline-secondary"
              @click="$router.push('/settings')"
            >
              <i class="fas fa-cog"></i>
              <span class="mx-2">Edit Profile Settings</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <nav class="container">
      <ul class="nav">
        <li @click="selectedTabName = 'MyArticles'">
          <router-link
            class="nav-link"
            :class="{ 'is-active': selectedTabName === 'MyArticles' }"
            :to="`/@${user.username}`"
            >My Articles</router-link
          >
        </li>
        <li @click="selectedTabName = 'FavouriteArticles'">
          <router-link
            class="nav-link"
            :class="{ 'is-active': selectedTabName === 'FavouriteArticles' }"
            :to="`/@${user.username}/favourites`"
            >Favourited Articles</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedTabName: ""
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  created() {
    this.selectedTabName = "MyArticles";
  }
};
</script>

<style scoped>
.profile-info-container {
  width: 65%;
}

.profile-picture {
  border-radius: 50%;
}

.user-name {
  font-weight: bolder;
  font-size: 180%;
}

.nav-link {
  color: black;
}

.is-active {
  border-bottom: 2px solid #5cb85c !important;
}
</style>
