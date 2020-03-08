<template>
  <div class="container h-100 w-50">
    <div class="row">
      <form class="col-12 text-center">
        <h3 class="mx-4 mt-4">Sign In</h3>
        <router-link to="signup">
          <span class="vue-green">Need to Sign up?</span>
        </router-link>
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
          :disabled="sendingRequest"
          class="btn btn-success float-right"
          @click.prevent="submit"
        >
          Sign In
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
  name: "SignIn",
  components: {
    ErrorsList
  },
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      sendingRequest: false
    };
  },
  methods: {
    ...mapActions(["setUser"]),
    async submit() {
      try {
        this.errors = [];
        this.sendingRequest = true;
        const response = await this.login();
        this.setUser(response.data.user);
        this.$router.replace("/home");
      } catch (e) {
        if (e.response.status === 400 || e.response.status === 422) {
          this.errors = e.response.data.errors.body;
        }
      } finally {
        this.sendingRequest = false;
      }
    },
    async login() {
      const payload = {
        user: {
          email: this.email,
          password: this.password
        }
      };

      const proxy = new HttpProxy();
      return await proxy.signin(payload);
    }
  }
};
</script>

<style scoped></style>
