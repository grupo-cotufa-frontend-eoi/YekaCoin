<template>
  <div class="article">
    <div class="article-title">
      {{ item.title }}
    </div>
    <div class="article-img">
      <img class="article-content__img" :src="item.image_url" alt="" />
    </div>
    <div class="article-content">
      <div class="primary-content">
        <p class="primary-content__abstract__title">Abstract</p>
        <p class="primary-content__abstract__text">{{ item.text }}</p>
      </div>
      <div class="extra-content">
        <p class="extra-content__source">
          <strong>{{ item.source_name }}</strong> -
        </p>
        <p class="extra-content__date">{{ item.date }}</p>
        <p>
          <a class="extra-content__article-link" :href="item.news_url"
            >Full article here!</a
          >
        </p>
      </div>
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
.article {
  @apply w-11/12 border-4 border-primary p-5 m-4 bg-orange rounded-2xl shadow-lg overflow-hidden max-h-96;
  transition: max-height 2s ease-out;
  animation: fadeInUp 3s;

  & .article-title {
    @apply text-primary;
  }

  & .article-img {
    @apply mt-2 border-2 border-primary shadow-md rounded-2xl;

    & .article-content__img {
      @apply rounded-xl;
    }
  }

  & .article-content {
    @apply flex text-base mt-4 rounded-xl text-left flex-col gap-2 h-auto opacity-0;

    & .primary-content {
      @apply p-2 bg-secondary rounded-xl;
    }

    & .primary-content__abstract__title {
      @apply border-b-2 border-dotted border-orange text-center;
    }

    & .extra-content {
      @apply p-2 bg-lightBlue rounded-xl;

      & .extra-content__source,
      & .extra-content__date {
        @apply inline;
      }

      & .extra-content__article-link {
        @apply border-b-2 text-marine border-marine text-left;
      }
    }
  }
}

.article:hover {
  max-height: 100%;
}

.article:hover .article-content {
  animation: dropIn 5s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes dropIn {
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  35%,
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>
