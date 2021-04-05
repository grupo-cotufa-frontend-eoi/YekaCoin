<template>
  <div class="news-container">
    <h1 class="news-title">News section</h1>
    <NewsCard
      v-for="(item, index) of this.news"
      :key="index"
      :item="item"
    ></NewsCard>
  </div>
</template>
<script>
import NewsCard from "../components/newsCard/NewsCard";
export default {
  name: "News",
  components: {
    NewsCard,
  },
  data() {
    return {
      news: [],
    };
  },
  methods: {
    setNews() {
      const data = require("../../public/news.json");
      this.news = data.news;
    },
  },
  mounted() {
    this.setNews();
  },
};
</script>
<style lang="postcss">
.news-container {
  @apply text-center w-auto sm:grid sm:grid-cols-2;

  & .news-title {
    @apply text-4xl font-semibold col-span-2 my-5;
  }
}
</style>
