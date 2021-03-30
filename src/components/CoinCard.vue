<template>
  <router-link :to="{name: 'Coin', params: {id: coin.uuid, nameCoin: coin.name}}">
    <div class="card-coin" @click="filterCoinID(coin.uuid)">
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
        <span class="card-content__text uppercase">{{coin.price}}</span>
      </div>
      <div class="card-content">
        <span class="card-content__text uppercase">+{{coin.change}}</span>
      </div>
      <div class="card-content">
        <button class="card-content__btn">
          <i class="far fa-star"></i>
        </button>
      </div>
    </div>
  </router-link>
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
  },
  methods: {
    ...mapActions(["filterCoinID"]),
  },
  computed: {
    ...mapState(["id"]),
  },
};
</script>

<style lang="postcss">

.card-coin{
  @apply flex ml-2 mb-2 h-20 w-full
       border-marine bg-white hover:bg-primary
         border-2 rounded-md shadow-lg;

  & .card-content {
    @apply flex items-center h-full w-min left-0 mx-5 p-5;

    & .card-content__img {
      @apply h-12 w-12 mr-2;
    }

    & .card-content__text {
      @apply text-2xl;
    }

    & .card-content__btn{
      @apply bg-secondary px-6 py-2 rounded-md shadow-lg
               border-2 border-marine hover:bg-lightBlue;

      & .fa-star {
        @apply text-marine;
      }
    }
  }
}
</style>
