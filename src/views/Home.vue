<template>
  <div class="container">
    <div class="welcome-msg">
      <h1 class="welcome-msg__title">Welcome to our Home Page!</h1>
      <p>YekaCoin is a place where you can easily see the real price of most cryptocurrencies, as well as including graphs showing their evolution over time.</p>
    </div>
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
                  <option @click="setLeftCoin(coin)" v-for="coin of this.coins" :key="coin.uuid" :leftCoin="coin" :value="coin.uuid">{{coin.name}}</option>
                </select>
              </td>
              <td>{{leftCoin.rank}}</td>
              <td>{{leftCoin.name}}</td>
              <td>{{leftCoin.symbol}}</td>
              <td><img class="logo" :src=leftCoin.iconUrl alt="No image"></td>
              <td>{{leftCoin.price}}</td>
              <td>{{leftCoin.change}}</td>
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
              <td><img class="logo" :src=rightCoin.iconUrl alt="No image"></td>
              <td>{{rightCoin.price}}</td>
              <td>{{rightCoin.change}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {

  },
  data() {
    return {
      leftCoin: {
        rank: "",
        name: "",
        symbol: "",
        iconUrl: "",
        price: "",
        change: "",
      },
      rightCoin: {
        rank: "",
        name: "",
        symbol: "",
        iconUrl: "",
        price: "",
        change: "",
      },
    };
  },
  methods: {
    ...mapActions(["fetchCoinsData"]),
    updateCoins() {
      this.fetchCoinsData();
    },
    setLeftCoin(coin) {
      this.leftCoin.rank = coin.rank;
      this.leftCoin.name = coin.name;
      this.leftCoin.symbol = coin.symbol;
      this.leftCoin.iconUrl = coin.iconUrl;
      this.leftCoin.price = parseFloat(coin.price).toFixed(2) + " $";
      this.leftCoin.price = "+ " + parseFloat(coin.change).toFixed(2) + " %";
    },
    setRightCoin(coin) {
      this.rightCoin.rank = coin.rank;
      this.rightCoin.name = coin.name;
      this.rightCoin.symbol = coin.symbol;
      this.rightCoin.iconUrl = coin.iconUrl;
      this.rightCoin.price = parseFloat(coin.price).toFixed(2) + " $";
      this.rightCoin.price = "+ " + parseFloat(coin.change).toFixed(2) + " %";
    },
  },
  computed: {
    ...mapState(["coins"]),
  },
  beforeMount() {
    this.updateCoins();
  },
};
</script>
<style lang="postcss">
.logo {
  @apply h-6 w-6;
}
.container {
  @apply flex flex-col h-full w-full;

  & .welcome-msg {
    @apply text-center text-sm w-full;
    font-family: 'Press Start 2P', cursive;

    & .welcome-msg__title {
      @apply text-4xl mb-4;
    }
  }

  & .compare-tool {
    @apply mt-10 w-full rounded-xl;

    & .compare-tool__header {
      @apply grid bg-darkBlue w-full rounded-xl shadow-md mb-4;
    }

    & .compare-tool__body {
      @apply grid bg-darkBlue h-80 w-full rounded-xl shadow-md;

      & .table-body {
        @apply bg-secondary ;

        & .coin-stats {
          @apply border-2 border-black h-full w-full;
        }
      }
    }
  }
}
</style>
