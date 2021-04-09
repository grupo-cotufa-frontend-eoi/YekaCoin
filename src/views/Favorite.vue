<template>
  <div class="container">
    <div class="text-center my-6 text-4xl font-semibold">
      <h2>Your favorite coins</h2>
    </div>
    <Title />
    <div class="coins-container" v-if="favoriteCoin.length !== 0">
      <CoinCard
        v-on:onClick="addFavorite"
        v-for="coin of this.favoriteCoin"
        :key="coin.uuid"
        :coin="coin"
      ></CoinCard>
    </div>
    <Warning v-else />
  </div>
</template>

<script>
import CoinCard from "../components/coinCard/CoinCard";
import Warning from "../components/warning/Warning";
import Title from "../components/title-coin/Title-coin";
import { mapState, mapActions } from "vuex";

export default {
  name: "Coins",
  data() {
    return {
      favoriteCoin: [],
    };
  },
  components: {
    CoinCard,
    Warning,
    Title
  },
  methods: {
    ...mapActions(["saveFavorite"]),
    addFavorite() {
      this.favoriteCoin = [];
      this.coins.forEach((element) => {
        this.favorite.forEach((coin) => {
          if (element.uuid === coin) {
            this.favoriteCoin.push(element);
          }
        });
      });
    },
  },
  computed: {
    ...mapState(["coins", "favorite"]),
  },

  created() {
    if (this.favorite.length > 0) {
      this.addFavorite();
    }
  },
};
</script>

<style lang="postcss">
.container {

  & .coins-container {
    @apply flex flex-col justify-center items-center w-full h-full;
  }
}
</style>
