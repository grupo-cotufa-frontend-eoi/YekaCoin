<template>
<div class="container">
  <div class="coins-title">
    <h1>Cryptocurrency</h1>
    <h1>Value</h1>
    <h1>Change</h1>
    <h1>Favorite</h1>
  </div>
  <div class="coins-container">
    <CoinCard v-for="coin of this.coins" :key="coin.uuid" :coin="coin"></CoinCard>
  </div>
</div>

</template>

<script>
import CoinCard from "../components/CoinCard";
import { mapActions, mapState } from "vuex";
export default {
  name: "Coins",
  components: {
    CoinCard,
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
  @apply flex flex-col;

  & .coins-title {
    @apply flex justify-center gap-32 items-center w-full h-full mx-auto mb-6 font-extrabold;
  }

  & .coins-container {
    @apply flex flex-col justify-center items-center w-full h-full mx-auto;
  }
}

</style>
