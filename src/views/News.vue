<template>
  <div class="news-container">
    <h1 class="news-title">News section</h1>
      <NewsCard v-for="(item, index) of this.news" :key="index" :item="item"></NewsCard>
  </div>
</template>
<script>
import NewsCard from "../components/NewsCard";
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
  mounted () {
    this.setNews();
  },
};
</script>
<style lang="postcss">
.news-container {
  @apply text-center grid grid-cols-2;

  & .news-title {
    @apply  font-extrabold col-span-2 capitalize bg-clip-text text-orange;
    transition: transform .2s;
  }

  & .news-title:hover {
    transform: scale(1.2);
  }
}
</style>
