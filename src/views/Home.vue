<template>
  <div class="container">
    <div class="welcome-msg">
      <h1 class="welcome-msg__title">Welcome to our Home Page!</h1>
      <p class="welcome-msg__text">
        YekaCoin is a place where you can easily see the real price of most
        cryptocurrencies, as well as including graphs showing their evolution
        over time and also comparing the statistics of the coins.
      </p>
    </div>
    <div class="bubbles-section">
      <h1 class="bubbles-section__title">
        These are all the currencies we work with
      </h1>
      <div class="bubbles-container">
        <BubbleCoin
          v-for="coin of this.coins"
          :key="coin.uuid"
          :coin="coin"
        ></BubbleCoin>
      </div>
    </div>
    <Comparer></Comparer>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Comparer from "../components/Comparer";
import BubbleCoin from "../components/BubbleCoin";
export default {
  name: "Home",
  components: {
    Comparer,
    BubbleCoin,
  },
  methods: {
    ...mapActions(["fetchCoinsData"]),
  },
  computed: {
    ...mapState(["coins"]),
  },
  beforeMount() {
    this.fetchCoinsData();
  },
};
</script>
<style lang="postcss">
.container {
  @apply flex flex-col h-full w-full;

  & .welcome-msg {
    @apply text-center w-full;

    & .welcome-msg__title {
      @apply text-4xl my-10;
    }

    & .welcome-msg__text {
      @apply text-xl mb-4 font-medium;
    }
  }

  & .bubbles-section {
    @apply flex flex-col justify-items-center items-center text-center font-medium m-10;

    & .bubbles-container {
      @apply flex flex-wrap;
    }
  }
}
</style>
