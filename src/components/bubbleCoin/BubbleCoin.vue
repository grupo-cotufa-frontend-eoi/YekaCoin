<template>
  <div class="bubble">
    <img class="bubble-image" :src="coin.iconUrl" alt="Bubble image" />
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
         border-2 border-black bg-turquoise shadow-bubble relative overflow-hidden;

  & .bubble-image {
    @apply h-14 w-14;
  }

  & .bubble-text {
    @apply grid grid-rows-2;
  }
}
.bubble:after {
  animation: shine 5s ease-in-out infinite;
  animation-fill-mode: forwards;
  content: "";
  position: absolute;
  top: -110%;
  left: -210%;
  width: 200%;
  height: 200%;
  opacity: 0;
  transform: rotate(30deg);

  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.568) 92%,
    rgba(255, 255, 255, 0) 100%
  );
}

@keyframes shine {
  10% {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }
  100% {
    opacity: 0;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
  }
}
</style>
