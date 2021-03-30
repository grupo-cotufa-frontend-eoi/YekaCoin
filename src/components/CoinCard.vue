<template>
  <div class="card-coin">
    <router-link :to="{name: 'Coin', params: {id: coin.uuid, nameCoin: coin.name}}">
      <div class="infocard" @click="filterCoinID(coin.uuid)">
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
          <span class="card-content__text uppercase">{{parseFloat(coin.price).toFixed(2)}}</span>
        </div>
        <div class="card-content">
          <span class="card-content__text uppercase">+{{parseFloat(coin.change).toFixed(2)}}</span>
        </div>
      </div>
    </router-link>
    <div class="card-button">
      <button v-on:click="[updateFavorite(coin.uuid),$emit('onClick')]" class="card-content__btn">
        <i v-if="favorite.includes(coin.uuid)" class="fas fa-star active"></i>
        <i v-else class="far fa-star"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CoinCard",
  props: {
    coin: {
      uuid: String,
      name: String,
      symbol: String,
      iconUrl: String,
      price: String,
      change: String,
    },
    onClick: {
      type: Function,
      default: null,
    },
  },
  methods: {
    ...mapActions(["filterCoinID", "addFavorite", "deleteFavorite"]),
    updateFavorite (id) {
      if (this.favorite.includes(id)) {
        this.deleteFavorite(id);
        this.$emit("addFavorite");
      } else this.addFavorite(id);
    },
    click2 () {
      console.log();
    },

  },
  computed: {
    ...mapState(["id", "favorite"]),
  },
};
</script>

<style lang="postcss">

.card-coin{
  @apply flex justify-around ml-1 mb-2 h-20 w-full
       border-marine bg-white hover:bg-primary
         border-2 rounded-md shadow-lg;
  transition: transform .2s;

  & .infocard{
    @apply flex justify-evenly w-full items-center h-full
  }

  & .card-content {
    @apply flex items-center h-full w-32 left-0 mx-5 p-5;

    & .card-content__img {
      @apply h-12 w-12 mr-2;
    }

    & .card-content__text {
      @apply text-2xl;
    }

    }
  }

.card-button{
  @apply w-6 h-full flex items-center
}
.card-content__btn{
  @apply bg-secondary px-6 py-2 rounded-md shadow-lg
               border-2 border-marine hover:bg-lightBlue;
}
.fa-star {
        @apply text-marine;
      }
.card-coin:hover {
  transform: scale(1.2);
}
</style>
