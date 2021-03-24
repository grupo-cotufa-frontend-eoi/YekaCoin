<template>
  <div
    class="container mx-auto flex-col flex justify-center items-center h-full">
    <div v-for="(coin,index) of coins"
    :key="index"
    class="w-10/12  bg-white h-20 rounded-md flex justify-between px-6 mb-6">
      <div class="flex items-center h-full">
        <img
          class="h-12 w-12 mr-2"
          :src=coin.iconUrl
          alt=""
        />
        <span class="font-semibold text-xl">{{coin.name}}</span>
      </div>
      <div class="flex items-center h-full">
        <span class="font-semibold text-xl uppercase">{{coin.symbol}}</span>
      </div>
      <div class="flex items-center h-full">
        <span class="font-semibold text-xl uppercase">{{coin.uuid}}</span>
      </div>
      <div class="flex items-center h-full">
        <span class="font-semibold text-xl uppercase">+1,12%</span>
      </div>
      <div class="flex items-center h-full">
        <button class="bg-marine px-6 py-2 rounded-md">
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
    </div>
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
      const url = await fetch("https://api.coinranking.com/v2/coins?limit=5");
      const vista = await url.json();
      this.coins = vista.data.coins;
    },
  },
};
</script>

<style>
</style>
