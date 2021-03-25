<template>
  <div
    class="cards">
    <router-link :to="{name: 'Coin', params: {id : coin.uuid, nameCoin: coin.name}}" class="card-coin" v-for="coin of coins" :key="coin.uuid">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-star"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
              />
            </svg>
          </button>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card-coins",
  beforeMount () {
    this.ver();
  },

  data () {
    return {
      coins: [],
    };
  },
  methods: {
    async ver () {
      const url = await fetch("https://api.coinranking.com/v2/coins?limit=10");
      const vista = await url.json();
      this.coins = vista.data.coins;
    },
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

</style>
