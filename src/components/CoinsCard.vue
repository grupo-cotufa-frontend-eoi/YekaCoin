<template>
  <div
    class="cards">
    <router-link :to="{name: 'Coin', params: {id : coin.uuid,nameCoin: coin.name}}"  class="card-coin" v-for="coin of coins" :key="coin.uuid">
        <div class="card-content">
          <img
            class="card-content__img"
            :src=coin.iconUrl
            alt=""
          />
          <span class="card-content__text">{{coin.name}}</span>
        </div>
        <div class="card-content">
          <span class="card-content__text uppercase">{{coin.symbol}}</span>
        </div>
        <div class="card-content">
          <span class="card-content__text uppercase">{{coin.uuid}}</span>
        </div>
        <div class="card-content">
          <span class="card-content__text uppercase">hola</span>
        </div>
        <div class="card-content">
          <button @click.prevent="updateFavorite(coin.uuid)"
          class="card-content__btn">
            <i v-if="favorite.includes(coin.uuid)" class="fas fa-star active"></i>
            <i v-else class="far fa-star"></i>
          </button>
        </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Card-coins",
  methods: {
    ...mapActions(["fetchCoinsData", "addFavorite", "saveFavorite", "deleteFavorite"]),
    updateCoins () {
      this.fetchCoinsData();
      this.saveFavorite();
    },
    updateFavorite (id) {
      if (this.favorite.includes(id)) this.deleteFavorite(id);
      else this.addFavorite(id);
    },
  },
  computed: {
    ...mapState(["coins", "favorite"]),
    getCoin () {
      return this.coins.includes;
    },
  },
  beforeMount () {
    this.updateCoins();
  },
};
</script>

<style lang="postcss">
.cards {
  @apply container mx-auto flex-col flex justify-center items-center h-full;
}
.card-coin{
  @apply w-10/12 bg-white h-20 rounded-md flex justify-between px-6 mb-6
}

.card-content{
  @apply flex items-center h-full;
}

.card-content__img{
  @apply h-12 w-12 mr-2;
}

.card-content__text{
  @apply font-semibold text-xl;
}

.card-content__btn{
  @apply bg-marine px-6 py-2 rounded-md;
}

.active{
  @apply text-orange
}
</style>
