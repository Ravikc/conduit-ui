<template>
  <div class="container h-100 w-50">
    <div class="row">
      <form class="col-12 text-center">
        <h3 class="mx-4 mt-4">Sign Up</h3>
        <router-link to="signin">
          <span class="vue-green">Have an account?</span>
        </router-link>
        <div class="form-group">
          <input
            v-model="userName"
            class="form-control form-control-lg"
            placeholder="Username"
            :disabled="sendingRequest"
          />
        </div>
        <div class="form-group">
          <input
            v-model="email"
            class="form-control form-control-lg"
            type="email"
            placeholder="Email"
            :disabled="sendingRequest"
          />
        </div>
        <div class="form-group">
          <input
            v-model="password"
            type="password"
            class="form-control form-control-lg"
            placeholder="Password"
            :disabled="sendingRequest"
          />
        </div>
        <button
          @click.prevent="submit"
          class="btn btn-success float-right"
          :disabled="sendingRequest"
        >
          Sign Up
        </button>
      </form>
      <errors-list :errors="errors" />
    </div>
  </div>
</template>

<script>
import ErrorsList from "@/components/ErrorsList";
import { mapActions } from "vuex";
import HttpProxy from "@/network/httpproxy.js";

export default {
  name: "SignUp",
  components: {
    ErrorsList,
  },
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      errors: [],
      sendingRequest: false,
    };
  },
  methods: {
    ...mapActions(["setUser"]),
    async submit() {
      try {
        this.errors = [];
        this.sendingRequest = true;
        const response = await this.registerUser();
        console.log(response);
        this.setUser(response.data.user);
        this.$router.replace("/home");
      } catch (e) {
        console.log(e);
        // if (e.response.status === 400 || e.response.status === 422) {
        //   this.errors = e.response.data.errors.body;
        // }
      } finally {
        this.sendingRequest = false;
      }
    },
    async registerUser() {
      const payload = {
        user: {
          username: this.userName,
          email: this.email,
          password: this.password,
        },
      };

      const proxy = new HttpProxy();
      return await proxy.registerUser(payload);
    },
  },
};
</script>

<style scoped></style>
