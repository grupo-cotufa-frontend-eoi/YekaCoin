<template>
  <div class="gridy-1 gridyhe-2">
    <div class="gridimg"><img :src="item.image_url" alt="" /></div>

    <div class="gridinfo">
      <h3>{{ item.title }}</h3>
      <div class="gridmeta">
        <p class="gridwhen"><i class="fa fa-clock-o"></i> {{ item.date }}</p>
        <p class="gridwho"><i class="fa fa-user"></i>{{ item.source_name }}</p>
      </div>
      <p class="gridexerpt">{{ item.text }}</p>
      <a :href="item.news_url" class="grid-btn grid-more"
        ><span>More</span> <i class="fa fa-plus"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    item: {
      title: String,
      image_url: String,
      text: String,
      source_name: String,
      date: String,
      news_url: String,
    },
  },
};
</script>

<style lang="postcss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600);
</style>
