<template>
  <canvas id="chart" width="1000" height="500"
    >Your navigator doesn't allow graphics</canvas
  >
</template>

<script>
import { mapState } from "vuex";
import { Chart } from "chart.js";
export default {
  name: "CoinChart",
  data() {
    return {
      coin: {},
      actualPrice: 0,
      coinSparklines: [],
      labels: [],
    };
  },
  methods: {
    buildChart() {
      const canvas = document.getElementById("chart");
      Chart.defaults.global.defaultFontSize = 18;
      Chart.defaults.global.defaultFontColor = "black";
      const myChart = new Chart(canvas, {
        type: "line",
        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.coinSparklines,
              label: `Current value: ${this.actualPrice}`,
              pointRadius: 7,
              pointHoverRadius: 10,
              backgroundColor: "#BEE0FF",
              borderColor: "#DA7500",
              borderWidth: 3,
              fill: false,
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
                scaleLabel: {
                  display: true,
                  labelString: "Price",
                },
              },
            ],
          },
          title: {
            display: true,
            text: `${this.coin.name} (${this.coin.symbol})`,
          },
        },
      });
      return myChart;
    },
    setData(id) {
      // Guardamos la moneda a graficar
      this.coins.forEach((coin) => {
        if (coin.uuid === id) {
          this.coin = coin;
        }
      });
      this.coinSparklines = this.coin.sparkline.map((spark) => parseFloat(spark));
      // Reducimos los valores obtenidos a formato 24 h
      const reduceAmount = this.coinSparklines.length - 24;
      this.coinSparklines = this.coinSparklines.slice(reduceAmount);
      // Seteamos valores de label y actual price
      this.labels = this.coinSparklines.map((spark, index) => index.toString());
      this.actualPrice = parseFloat(this.coin.price).toFixed(2);
    },
  },
  computed: {
    ...mapState(["id", "coins"]),
  },
  mounted() {
    this.setData(this.id);
    this.buildChart();
  },
};
</script>
<style lang="postcss">
#chart {
  @apply bg-yellow-50 border-2 border-orange shadow-md rounded-xl max-w-full;
}
</style>
