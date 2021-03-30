<template>
<div class="container">
  <div class="coins-title">
    <h1>Cryptocurrency</h1>
    <h1>Value</h1>
    <h1>Change</h1>
    <h1>Favorite</h1>
  </div>
  <div class="coins-container" v-if="hasFavorite">
    <CoinCard v-for="coin of this.favoriteCoin" :key="coin.uuid" :coin="coin"></CoinCard>
  </div>

  <div class="coins-container" v-else>
    <h1>No hays</h1>
  </div>
</div>

</template>

<script>
import CoinCard from "../components/CoinCard";
import { mapState } from "vuex";
export default {
  name: "Coins",
  data() {
    return {
      favoriteCoin: [],
      hasFavorite: false,
    };
  },
  components: {
    CoinCard,
  },
  methods: {
    async addFavorite () {
      await Promise.all(this.coins.forEach(async (element) => {
        this.favorite.forEach(async (coin) => {
          if (element.uuid === coin) {
            await this.favoriteCoin.push(element);
          }
        });
      }));
    },

  },
  computed: {
    ...mapState(["coins", "favorite"]),
  },
  beforeMount() {
    if (this.favorite.length > 0) { this.addFavorite(); }
  },
  mounted () {
    if (this.favoriteCoin.length > 0) this.hasFavorite = true;
    else this.hasFavorite = false;
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
