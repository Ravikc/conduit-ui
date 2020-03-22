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
          <base-input
            v-model="email"
            placeholder="Email"
            size="lg"
            :disabled="true"
          />
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
        <button class="btn btn-outline-danger float-left" @click="onLogout">
          Or click here to logout.
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseComponents/BaseInput";
import BaseTextArea from "@/components/BaseComponents/BaseTextArea";
import { mapGetters, mapActions } from "vuex";
import HttpProxy from "@/network/httpproxy";

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
      password: "",
      busy: false
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  created() {
    this.profilePictureUrl = this.user.image;
    this.userName = this.user.username;
    this.bio = this.user.bio;
    this.email = this.user.email;
  },
  methods: {
    ...mapActions(["logout", "setUser"]),
    async onFormSubmit() {
      this.busy = true;
      try {
        const response = await this.updateUser();
        this.setUser(response.data.user);
      } catch {
        console.log("error");
      } finally {
        this.busy = false;
      }
    },
    async updateUser() {
      const dto = {
        user: {
          userName: this.userName,
          email: this.email,
          bio: this.bio,
          password: this.password,
          image: this.profilePictureUrl
        }
      };

      const proxy = new HttpProxy();
      return await proxy.updateUser(dto);
      // return await axios({
      //   method: "put",
      //   baseURL: CONSTANTS.BASE_URL,
      //   url: "/users",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${this.user.token}`
      //   },
      //   data: {
      //     user: {
      //       userName: this.userName,
      //       email: this.email,
      //       bio: this.bio,
      //       password: this.password,
      //       image: this.profilePictureUrl
      //     }
      //   }
      // });
    },
    onLogout() {
      this.logout();
      this.$router.replace("/home");
    }
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
