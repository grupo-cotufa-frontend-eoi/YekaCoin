<template>
  <div class="container">
    <div class="favorite-section__title">
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
    Title,
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
  & .favorite-section__title {
    @apply text-white text-center my-6 text-2xl font-semibold;
    text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;
    font-family: "Press Start 2P";
  }

  & .coins-container {
    @apply flex flex-col justify-center items-center w-full h-full;
  }
}
</style>
