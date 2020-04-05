<template>
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-6">
        <base-input v-model="title" placeholder="Article Title" />
      </div>
    </div>
    <div class="row justify-content-center text-center">
      <div class="col-6">
        <base-input
          v-model="description"
          placeholder="What's this article about?"
        />
      </div>
    </div>
    <div class="row justify-content-center text-center">
      <div class="col-6">
        <base-text-area
          v-model="body"
          :rows="5"
          placeholder="Write your article"
        />
      </div>
    </div>
    <div class="row justify-content-center text-center">
      <div class="col-6">
        <div class="d-flex flex-row-reverse">
          <button
            :disabled="busy || !canPublish"
            class="btn btn-lg btn-success"
            @click="onClick"
          >
            Publish Article
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseComponents/BaseInput";
import BaseTextArea from "@/components/BaseComponents/BaseTextArea";
import HttpProxy from "@/network/httpproxy";

export default {
  name: "NewArticle",
  components: {
    BaseInput,
    BaseTextArea,
  },
  data() {
    return {
      title: "",
      description: "",
      body: "",
      busy: false,
    };
  },
  computed: {
    canPublish() {
      return this.title && this.description && this.body;
    },
  },
  methods: {
    async onClick() {
      this.busy = true;
      try {
        const response = await this.publishArticle();
        console.log(response);
      } catch {
        alert("error wihle publishing article");
      } finally {
        this.busy = false;
      }
    },
    async publishArticle() {
      const dto = {
        article: {
          title: this.title,
          description: this.description,
          body: this.body,
        },
      };

      const proxy = new HttpProxy();
      return await proxy.publishArticle(dto);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 5%;
}

.row {
  margin-bottom: 2%;
}
</style>
