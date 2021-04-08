<template>
  <div class="gridywrap">
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
.gridywrap {
  & .news-title {
    @apply text-center text-4xl font-semibold col-span-2 my-5;
  }

  & div[class*="gridy"] {
    @apply bg-turquoise p-2 float-left relative border-2;
  }

  & .gridy-1 {
    @apply w-full overflow-hidden;
  }

  & .gridyhe-2 {
    height: 320px;
  }
}

@media screen and (min-width: 640px) {
  .gridywrap .gridyhe-2 {
    height: 320px;
  }
  .gridywrap {
    width: 100%;
  }
  .gridywrap .gridy-1 {
    width: 50%;
  }
}
@media screen and (min-width: 1024px) {
  .gridywrap .gridy-1 {
    width: 33.3%;
  }
  .gridywrap .gridyhe-2 {
    height: 640px;
  }
}

/*styling*/
.gridywrap .gridimg {
  @apply absolute top-0 left-0 right-0 bottom-0 overflow-hidden bg-center bg-cover;
}
.gridywrap .gridimg img {
  @apply w-full;
}
.gridywrap .gridinfo {
  @apply absolute w-full h-full top-0 left-0 text-center transition-all duration-1000 bg-black bg-opacity-40;
}
.gridywrap .gridinfo h3 {
  @apply text-xl text-white font-bold uppercase mt-56 mb-5 relative;
}
.gridywrap .gridinfo h3:after {
  @apply w-6 block my-0 mx-auto mt-6 border-t-4 border-white;
  content: "";
}
.gridywrap .gridinfo .gridmeta {
  @apply delay-300;
}
.gridywrap .gridinfo .gridmeta p {
  @apply inline-block text-sm text-white mb-4;
}
.gridywrap .gridinfo .gridmeta p i {
  @apply mr-2;
}
.gridywrap .gridinfo .gridmeta p.gridwho {
  @apply ml-7;
}
.gridywrap .gridinfo p.gridexerpt {
  @apply w-3/5 my-0 mx-auto mb-6 leading-tight text-white delay-500;
}

.gridywrap .gridinfo * {
  @apply opacity-0 transition-all duration-700;
}
.gridywrap .gridinfo h3 {
  @apply opacity-100;
}
.gridywrap .gridinfo .grid-btn {
  @apply block overflow-hidden text-white no-underline my-0 mx-auto w-9 h-9 leading-tight border-2 border-white rounded-full;
}
.gridywrap .gridinfo .grid-btn:hover {
  @apply w-16 bg-black opacity-30;
}
.gridywrap .gridinfo .grid-btn span {
  @apply opacity-0 hidden transition-opacity duration-700;
}
.gridywrap .gridinfo .grid-btn:hover span {
  @apply opacity-100 inline;
}
.gridywrap .gridinfo .grid-btn:hover i {
  @apply hidden opacity-0;
}

.gridywrap .gridinfo:hover * {
  @apply opacity-70;
}
.gridywrap .gridinfo:hover p {
  @apply opacity-100;
}
.gridywrap .gridinfo:hover {
  @apply bg-marine bg-opacity-70;
}
.gridywrap .gridinfo:hover h3 {
  @apply mt-16 opacity-100;
}
</style>
