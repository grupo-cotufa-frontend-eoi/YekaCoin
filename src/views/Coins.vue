<template>
  <div class="container height:w-11/12 mx-auto">
    <div class="coins-section__title">
      <h2>List of Coins</h2>
    </div>
    <Title />
    <div class="coins-container">
      <CoinCard
        v-for="coin of this.coins"
        :key="coin.uuid"
        :coin="coin"
      ></CoinCard>
    </div>
  </div>
</template>

<script>
import CoinCard from "../components/coinCard/CoinCard";
import Title from "../components/title-coin/Title-coin";
import { mapActions, mapState } from "vuex";
export default {
  name: "Coins",
  components: {
    CoinCard,
    Title,
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
  & .coins-section__title {
    @apply text-center my-6 text-2xl font-semibold;
    text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;
    font-family: "Press Start 2P";
  }

  & .coins-container {
    @apply flex flex-col items-center w-full h-full;
  }
}
</style>
