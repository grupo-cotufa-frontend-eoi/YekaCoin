<template>
  <div class="view-container">
    <h1 class="view-title">News section</h1>
    <div class="article" v-for="(item, index) of this.news" :key="index">
      <div class="article-title">
        {{item.title}}
      </div>
      <div class="article-img">
        <img class="card-content__img" :src=item.image_url alt="">
      </div>
      <div class="article-content">
        <div class="primary-content">
          <p class="primary-content__abstract">Abstract</p>
          <p class="">{{item.text}}</p>
        </div>
        <div class="extra-content">
          <p class="extra-content__source"><strong>{{item.source_name}}</strong> - </p>
          <p class="extra-content__date">{{item.date}}</p>
          <p><a class="extra-content__article-link" :href=item.news_url>Full article here!</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "News",
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
.view-container {
  @apply text-center grid grid-cols-2;
}
.article {
  @apply w-11/12 flex flex-col justify-center align-middle h-auto border-4 border-primary p-5 m-4 bg-orange rounded-2xl shadow-lg;
}
.article-title {
  @apply text-primary;
}
.article-img {
  @apply mt-2 border-2 border-primary shadow-md rounded-2xl;
}
.card-content__img {
  @apply rounded-xl;
}
.article-content {
  @apply flex text-base mt-4 rounded-xl text-left flex-col gap-2 h-auto  opacity-0;
  font-family: arial;
}
.article:hover .article-content {
  opacity: 1;
  transition: opacity 2s linear;
}
.primary-content {
  @apply  p-2 bg-secondary rounded-xl;
}
.primary-content__abstract {
  @apply border-b-2 border-dotted border-orange text-center;
}

.extra-content {
  @apply  p-2 bg-lightBlue rounded-xl;
}
.extra-content__source,
.extra-content__date {
  @apply inline;
}

.extra-content__article-link {
  @apply border-b-2 text-marine border-marine text-left;
}
.view-title {
  @apply col-span-2 capitalize bg-clip-text text-orange;
  transition: transform .2s;
}
.view-title:hover {
  transform: scale(1.2);
}
</style>
