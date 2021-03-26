<template>
  <div
    class="cards">
    <router-link :to="{name: 'Coin', params: {id : coin.uuid, nameCoin: coin.name}}" class="card-coin" v-for="coin of coins" :key="coin.uuid" @click="filterCoinID(coin.uuid)">
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
          <span class="card-content__text uppercase">+1,12%</span>
        </div>
        <div class="card-content">
          <button class="card-content__btn">
            <i class="far fa-star"></i>
            <!-- <i class="fas fa-star"></i> -->
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
    ...mapActions(["filterCoinID"]),
    ...mapActions(["fetchCoinsData"]),
    updateCoins() {
      this.fetchCoinsData();
    },
  },
  computed: {
    ...mapState(["coins"]),
    ...mapState(["id"]),
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
  @apply w-10/12 h-20 border-2 border-marine bg-white hover:bg-primary  rounded-md flex justify-between px-6 mb-6 shadow-lg ;
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
  @apply bg-secondary px-6 py-2 rounded-md shadow-lg border-2 border-marine hover:bg-lightBlue;
}
.fa-star {
  @apply text-marine;
}
</style>
