<template>
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-6">
        <h2>Your Settings</h2>
        <form @submit.prevent="onFormSubmit">
          <base-input
            v-model="profilePictureUrl"
            placeholder="URL of profile picture"
          />
          <base-input
            v-model="userName"
            placeholder="Your Username"
            size="lg"
          />
          <base-text-area
            v-model="bio"
            :rows="5"
            placeholder="Short bio about you"
          />
          <base-input v-model="email" placeholder="Email" size="lg" />
          <base-input
            v-model="password"
            placeholder="Password"
            size="lg"
            type="password"
          />
          <div class="d-flex flex-row-reverse">
            <button type="submit" class="btn btn-lg btn-success">
              Update Settings
            </button>
          </div>
        </form>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseComponents/BaseInput";
import BaseTextArea from "@/components/BaseComponents/BaseTextArea";
import { mapGetters } from "vuex";

export default {
  name: "Settings",
  components: {
    BaseInput,
    BaseTextArea
  },
  data() {
    return {
      profilePictureUrl: "",
      userName: "",
      bio: "",
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    onFormSubmit() {
      console.log("form submitted");
    }
  },
  created() {
    this.profilePictureUrl = this.user.image;
    this.userName = this.user.username;
    this.bio = this.user.bio;
    this.email = this.user.email;
  }
};
</script>

<style scoped>
h2 {
  margin: 2rem 0;
}
form input {
  margin: 1rem 0;
}
</style>
