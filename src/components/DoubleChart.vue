<template>
  <div class="container">
    <div class="selectors">
      <select @change="setData" class="first-coin" v-model="first">
        <option v-for="coin of this.coins" :key="coin.uuid" :value="coin">
          {{ coin.name }}
        </option>
      </select>
      <select @change="setData" class="second-coin" v-model="second">
        <option v-for="coin of this.coins" :key="coin.uuid" :value="coin">
          {{ coin.name }}
        </option>
      </select>
    </div>
    <canvas id="chart" width="1000" height="500"
      >Your navigator doesn't allow graphics</canvas
    >
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Chart } from "chart.js";
export default {
  name: "DoubleChart",
  data() {
    return {
      first: {},
      second: {},
      sparklines: [],
      prices: [],
      changedFirst: false,
      changedSecond: false,
      labels: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
      ],
    };
  },
  methods: {
    ...mapActions(["fetchCoinsData"]),
    setDefaultValues() {
      this.first = this.coins[0];
      this.second = this.coins[1];
      this.setData();
    },
    setData() {
      const firstSparks = [...this.first.sparkline];
      const firstSparklines = firstSparks.map((spark) => parseFloat(spark));
      this.sparklines[0] = firstSparklines.slice(firstSparklines.length - 24);

      const secondSparks = [...this.second.sparkline];
      const secondSparklines = secondSparks.map((spark) => parseFloat(spark));
      this.sparklines[1] = secondSparklines.slice(secondSparklines.length - 24);

      this.prices[0] = parseFloat(this.first.price).toFixed(2);
      this.prices[1] = parseFloat(this.second.price).toFixed(2);

      this.buildChart();
    },
    buildChart() {
      const canvas = document.getElementById("chart");
      Chart.defaults.global.defaultFontColor = "black";
      const myChart = new Chart(canvas, {
        type: "line",
        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.sparklines[0],
              label: this.first.name,
              backgroundColor: "#3e95cd",
              borderColor: "#3e95cd",
              fill: false,
              pointRadius: 7,
              pointHoverRadius: 10,
            },
            {
              data: this.sparklines[1],
              label: this.second.name,
              backgroundColor: "#8e5ea2",
              borderColor: "#8e5ea2",
              fill: false,
              pointRadius: 7,
              pointHoverRadius: 10,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Hour",
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max:
                    parseFloat(this.first.price) > parseFloat(this.second.price)
                      ? Math.floor(parseFloat(this.first.price)) * 1.5
                      : Math.floor(parseFloat(this.second.price)) * 1.5,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Price",
                },
              },
            ],
          },
          title: {
            display: true,
            text: `${this.first.name} vs ${this.second.name}`,
          },
        },
      });
      return myChart;
    },
  },
  computed: {
    ...mapState(["coins"]),
  },
  beforeMount() {
    this.fetchCoinsData();
  },
  mounted() {
    this.setDefaultValues();
    this.buildChart();
  },
  updated() {
    this.setData();
  },
};
</script>
<style lang="postcss">
#chart {
  @apply bg-yellow-50 border-2 border-orange shadow-md rounded-xl;
}
.container {
  @apply my-10;

  & .selectors {
    @apply flex justify-center my-10;

    & select {
      @apply mx-5 bg-marine h-8;
    }
  }
}
</style>
