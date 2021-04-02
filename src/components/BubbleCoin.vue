<template>
  <div class="bubble">
    <img class="bubble-image" :src="coin.iconUrl" alt="" />
    <h1 class="bubble-text">
      <span class="bubble-text__symbol">{{ coin.symbol }}</span>
      <span class="bubble-text__price"
        >{{ parseFloat(coin.price).toFixed(3) }} $</span
      >
    </h1>
  </div>
</template>

<script>
export default {
  name: "BubbleCoin",
  props: {
    coin: {
      uuid: String,
      name: String,
      symbol: String,
      iconUrl: String,
      price: String,
      change: String,
    },
  },
};
</script>
<style lang="postcss">
.bubble {
  @apply flex flex-col items-center justify-items-center h-52 w-52 m-10 p-6 rounded-full
         border-2 border-black bg-turquoise shadow-bubble;
  & .bubble-image {
    @apply h-14 w-14;
  }
  & .bubble-text {
    @apply grid grid-rows-2;
  }
}
</style>
