<template>
  <!-- <h1>{{$route.params.id}}</h1> -->
  <canvas id="chart" width="1000" height="500">Your navigator doesn't allow graphics</canvas>
</template>

<script>
import { mapState } from "vuex";
import { Chart } from "chart.js";
export default {
  name: "Coin",
  data() {
    return {
      coin: this.getCoin(),
    };
  },
  methods: {
    buildChart() {
      const canvas = document.getElementById("chart");
      Chart.defaults.global.defaultFontSize = 18;
      const myChart = new Chart(canvas, {
        type: "line",
        data: {
          labels: ["#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8"],
          datasets: [{
            data: [2520000, 3800000, 4970000, 6840000, 6880000, 7690000, 10260000, 11990000],
            label: "Juego de Tronos",
            backgroundColor: "#3e95cd",
            borderColor: "#3e95cd",
            fill: false,
          }, {
            data: [13340000, 17350000, 19950000, 17640000, 13620000, 12760000, 10320000, 8690000],
            label: "House",
            backgroundColor: "#8e5ea2",
            borderColor: "#8e5ea2",
            fill: false,
          }, {
            data: [5220000, 8970000, 9460000, 12480000, 10980000, 8600000],
            label: "Los Soprano",
            backgroundColor: "#3cba9f",
            borderColor: "#3cba9f",
            fill: false,
          }],
        },
        options: {
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Temporadas",
              },
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Espectadores",
              },
            }],
          },
          title: {
            display: true,
            text: "Nielsen Ratings",
          },
        },
      });
    },
    setCoin(id) {
      // This.coin = {{$route.params.id}};
    },
  },
  computed: {
    ...mapState(["id", "coins"]),
  },
  mounted () {
    this.buildChart();
  },
};
</script>

<style>

</style>
