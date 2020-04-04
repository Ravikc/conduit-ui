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
        return this.getMyFeed();
      } else {
        const response = await this.getAllArticles();
        return response.data.articles;
      }
    },
  },
  methods: {
    async getAllArticles() {
      const proxy = new HttpProxy();
      return await proxy.getArticles({});
    },
    getMyFeed() {
      return [];
    },
  },
};
</script>

<style scoped></style>
