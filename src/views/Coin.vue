<template>
  <canvas id="chart" width="1000" height="500">Your navigator doesn't allow graphics</canvas>
</template>

<script>
import { mapState } from "vuex";
import { Chart } from "chart.js";
export default {
  name: "Coin",
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
      const myChart = new Chart(canvas, {
        type: "line",
        data: {
          labels: this.labels,
          datasets: [{
            data: this.coinSparklines,
            label: `Current value: ${this.actualPrice}`,
            backgroundColor: "#DA7500",
            borderColor: "#FFE2B6",
            fill: false,
          },
          ],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Hour",
              },
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Price",
              },
            }],
          },
          title: {
            display: true,
            text: `${this.coin.name} (${this.coin.symbol})`,
          },
        },
      });
    },
    setData(id) {
      // Guardamos la moneda a graficar
      this.coins.forEach((coin) => {
        if (coin.uuid === id) { this.coin = coin; }
      });
      // Guardamos los valores de la moneda
      const sparklines = [...this.coin.sparkline];
      this.coinSparklines = sparklines.map((spark) => +parseFloat(spark).toFixed(2));

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
  mounted () {
    this.setData(this.id);
    this.buildChart();
  },
};
</script>

<style>

</style>
