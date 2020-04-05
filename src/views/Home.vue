<template>
  <div class="container">
    <nav>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#" @click="activeTab = 'myFeed'"
            >Your Feed</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" @click="activeTab = 'articles'"
            >Global Feed</a
          >
        </li>
      </ul>
    </nav>
    <section>
      <article-list :articles="articleList" />
    </section>
  </div>
</template>

<script>
import HttpProxy from "@/network/httpproxy";
import ArticleList from "@/components/ArticleList";

export default {
  name: "Home",
  components: {
    ArticleList,
  },
  data() {
    return {
      activeTab: "articles",
    };
  },
  asyncComputed: {
    async articleList() {
      if (this.activeTab === "myFeed") {
        return await this.getMyFeed();
      } else {
        return await this.getAllArticles();
      }
    },
  },
  methods: {
    async getAllArticles() {
      const proxy = new HttpProxy();
      const response = await proxy.getArticles({});
      return response.data.articles;
    },
    async getMyFeed() {
      const proxy = new HttpProxy();
      const response = await proxy.getMyFeed({});
      return response.data.articles;
    },
  },
};
</script>

<style scoped></style>
