<template>
<div class="container height:w-11/12 mx-auto">
  <div class="coins-title">
    <h1>Cryptocurrency</h1>
    <h1>Value</h1>
    <h1>Change</h1>
    <h1>Favorite</h1>
  </div>
  <div class="coins-container" v-if="favoriteCoin.length !==0" >
    <CoinCard v-on:onClick="addFavorite" v-for="coin of this.favoriteCoin" :key="coin.uuid" :coin="coin" ></CoinCard>
  </div>
  <h1 v-else>hola</h1>
</div>

</template>

<script>
import CoinCard from "../components/CoinCard";
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
  },
  methods: {
    ...mapActions(["saveFavorite"]),

    addFavorite () {
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

  beforeMount () {
    if (this.favorite.length > 0) { this.addFavorite(); }
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
