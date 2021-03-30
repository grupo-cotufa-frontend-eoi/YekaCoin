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
    ...mapActions(["saveFavorite"]),
    async updateCoins() {
      await this.saveFavorite();
    },
  },
  computed: {
    ...mapState(["coins"]),
  },
  async beforeMount() {
    await this.updateCoins();
  },
};
</script>

<style lang="postcss">
.container {
  & .coins-title {
    @apply flex justify-around mb-6 font-extrabold;
  }

  & .coins-container {
    @apply flex flex-col justify-center items-center w-full h-full;
  }
}

</style>
