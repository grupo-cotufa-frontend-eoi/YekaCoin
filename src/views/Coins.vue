<template>
  <div class="coins-container">
    <CoinCard v-for="coin of this.coins" :key="coin.uuid" :coin="coin"></CoinCard>
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
    updateCoins() {
      this.fetchCoinsData();
    },
  },
  computed: {
    ...mapState(["coins"]),
  },
  beforeMount() {
    this.updateCoins();
  },
};
</script>

<style lang="postcss">
.coins-container {
  @apply flex flex-col justify-center items-center w-full h-full mx-auto;
}
</style>
