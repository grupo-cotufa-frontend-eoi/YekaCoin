<template>
  <div class="h-auto flex flex-col items-center justify-center">
    <div class="compare-tool__header text-center">
      <div>¿Do you want to compare cryptocurrency statistics?</div>
    </div>
    <div class="container compare-tool__body pb-2">
      <table class="table-responsive">
        <thead>
          <tr class="column-responsive">
            <th class="text-table">Selection</th>
            <th class="text-table">Rank</th>
            <th class="text-table">Name</th>
            <th class="text-table">Symbol</th>
            <th class="text-table">Icon</th>
            <th class="text-table">Price</th>
            <th class="text-table">Change</th>
          </tr>
        </thead>
        <tbody class="table-body table-body pb-2">
          <tr class="table-content">
            <td class="flex justify-center">
              <select v-model="leftCoin">
                <option
                  v-for="coin of this.coins"
                  :key="coin.index"
                  :value="coin"
                >
                  {{ coin.name }}
                </option>
              </select>
            </td>
            <td class="text-table">{{ leftCoin.rank }}</td>
            <td class="text-table">{{ leftCoin.name }}</td>
            <td class="text-table">{{ leftCoin.symbol }}</td>
            <td class="flex justify-center items-center">
              <img class="logo" :src="leftCoin.iconUrl" alt="" />
            </td>
            <td class="text-table">
              {{ parseFloat(leftCoin.price).toFixed(2) }} $
            </td>
            <td class="text-table">
              {{ parseFloat(leftCoin.change).toFixed(2) }} %
            </td>
          </tr>
          <tr class="table-content">
            <td class="flex justify-center">
              <select v-model="rightCoin">
                <option
                  v-for="coin of this.coins"
                  :key="coin.index"
                  :value="coin"
                >
                  {{ coin.name }}
                </option>
              </select>
            </td>
            <td class="text-table">{{ rightCoin.rank }}</td>
            <td class="text-table">{{ rightCoin.name }}</td>
            <td class="text-table">{{ rightCoin.symbol }}</td>
            <td class="flex justify-center items-center">
              <img class="logo" :src="rightCoin.iconUrl" alt="" />
            </td>
            <td class="text-table">
              {{ parseFloat(rightCoin.price).toFixed(2) }} $
            </td>
            <td class="text-table">
              {{ parseFloat(rightCoin.change).toFixed(2) }} %
            </td>
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
    setDefaultValues() {
      this.leftCoin = this.coins[0];
      this.rightCoin = this.coins[0];
    },
  },
  computed: {
    ...mapState(["coins"]),
  },
  updated() {
    if (Object.keys(this.leftCoin).length === 0) {
      this.setDefaultValues();
    }
  },
};
</script>

<style lang="postcss">
.compare-tool__header {
  @apply text-center mb-4;
}
.compare-tool__body {
  @apply bg-darkBlue border-2 border-marine w-auto rounded-xl shadow-md;
}
.table-body {
  @apply bg-primary border-2 border-orange;
}
.text-table {
  @apply text-center;
}
@media (max-width: 764px) {
  .table-responsive {
    display: flex;
    justify-content: space-around;
  }
  .column-responsive,
  .table-content {
    display: flex;
    flex-direction: column;
  }
  .table-body {
    display: flex;
  }
}
.selected-coin {
  @apply text-xl text-center;
}
.logo {
  @apply h-9 w-9;
}
</style>
