<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <article-preview :article="article" />
    </div>
  </div>
</template>

<script>
import ArticlePreview from "@/components/ArticlePreview";
export default {
  name: "ArticleList",
  components: {
    ArticlePreview,
  },
  props: {
    articles: { type: Array, default: () => [] },
  },
};
</script>
