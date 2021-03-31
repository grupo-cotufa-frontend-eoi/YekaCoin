<template>
<div class="compare-tool">
  <div class="compare-tool__header">
    <div>¿Do you want to compare cryptocurrency statistics?</div>
  </div>
  <div class="compare-tool__body">
    <table class="table-auto">
      <thead class="table-head">
        <tr>
          <th>Selection</th>
          <th>Rank</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Icon</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr>
          <td>
            <select class="left-coin" v-model="leftCoin" multiple>
              <option @click="setLeftCoin(coin)" v-for="coin of this.coins" :key="coin.index" :leftCoin="coin" :value="coin.uuid">{{coin.name}}</option>
            </select>
          </td>
          <td>{{leftCoin.rank}}</td>
          <td>{{leftCoin.name}}</td>
          <td>{{leftCoin.symbol}}</td>
          <td><img class="logo" :src=leftCoin.iconUrl alt=""></td>
          <td>{{parseFloat(leftCoin.price).toFixed(2)}} $</td>
          <td>{{parseFloat(leftCoin.change).toFixed(2)}} %</td>
        </tr>
        <tr>
          <td>
            <select class="right-coin" v-model="rightCoin" multiple>
              <option @click="setRightCoin(coin)" v-for="coin of this.coins" :key="coin.uuid" :rightCoin="coin" :value="coin.uuid">{{coin.name}}</option>
            </select>
          </td>
          <td>{{rightCoin.rank}}</td>
          <td>{{rightCoin.name}}</td>
          <td>{{rightCoin.symbol}}</td>
          <td><img class="logo" :src=rightCoin.iconUrl alt=""></td>
          <td>{{parseFloat(rightCoin.price).toFixed(2)}} $</td>
          <td>{{parseFloat(rightCoin.change).toFixed(2)}} %</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Comparer",
  data() {
    return {
      leftCoin: {},
      rightCoin: {},
    };
  },
  methods: {
    setLeftCoin(coin) {
      this.leftCoin = coin;
    },
    setRightCoin(coin) {
      this.rightCoin = coin;
    },
    setDefaultValues() {
      this.leftCoin = this.coins[0];
      this.rightCoin = this.coins[0];
    },
  },
  computed: {
    ...mapState(["coins"]),
  },
  updated () {
    this.setDefaultValues();
  },
};
</script>

<style lang="postcss">
.compare-tool {
  @apply mt-10 w-full rounded-xl;

  & .compare-tool__header {
    @apply text-center mb-4;
  }

  & .compare-tool__body {
    @apply grid bg-darkBlue border-2 border-marine h-80 w-auto rounded-xl shadow-md;

    & .table-body {
      @apply bg-primary border-2 border-orange;

      & .logo {
        @apply h-6 w-6;
      }

      & select {
        @apply bg-lightBlue;
      }
    }
  }
}
</style>
