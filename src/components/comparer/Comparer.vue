<template>
  <div class="h-auto flex flex-col items-center justify-center text-white">
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
          <tr class="column-mobile">
            <th class="text-table">Selection</th>
            <th class="text-table">Rank</th>
            <th class="text-table">Name</th>
            <th class="text-table">Symbol</th>
            <th class="text-table">Icon</th>
            <th class="text-table">Price</th>
            <th class="text-table">Change</th>
          </tr>
        </thead>
        <tbody class="table-body pb-2 round">
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
            <td class="flex justify-center py-0 md:py-4">
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
      this.rightCoin = this.coins[1];
    },
  },
  computed: {
    ...mapState(["coins"]),
  },
  beforeMount() {
    if (Object.keys(this.leftCoin).length === 0) {
      this.setDefaultValues();
    }
  },
};
</script>

<style lang="postcss">
.round {
  @apply rounded-tr-xl;
}
.compare-tool__header {
  @apply text-white text-3xl font-extrabold text-center mb-6;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;
}
.compare-tool__body {
  @apply bg-darkBlue border-2 border-marine w-auto rounded-xl shadow-md;
}
.table-body {
  @apply bg-gradientFirst;
}
.text-table {
  @apply text-center;
}
.table-responsive {
  width: 100%;
}
.column-mobile {
  display: none;
}

@media (min-width: 764px) and (max-width: 792px) {
  td,
  th {
    font-size: 1.3rem;
  }
}
@media (max-width: 764px) {
  select {
    font-size: 1.1rem;
  }

  td,
  th {
    font-size: 1.2rem;
  }
  .column-responsive,
  .table-content {
    display: flex;
    justify-content: space-around;
  }
}

@media (max-width: 615px) {
  .table-responsive {
    display: flex;
    justify-content: space-around;
  }

  .table-content {
    display: flex;
    flex-direction: column;
  }
  thead,
  tbody {
    width: 50%;
  }
  .column-mobile,
  .column-responsive {
    display: flex;
    flex-direction: column;
  }
}
.selected-coin {
  @apply text-xl text-center;
}
.logo {
  @apply h-9 w-9;
}
select {
  @apply bg-gradientSecond shadow-xl rounded-xl;
}
</style>
