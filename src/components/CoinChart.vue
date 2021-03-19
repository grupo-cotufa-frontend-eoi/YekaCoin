<template>
<div>
  <canvas id="ejemplo" width="500" height="500"></canvas>
  <div class="inline-block mr-2 mt-2">
    <button @click="plotCoin" type="button" class="pt focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-gray-600 rounded-md bg-gray-500 hover:bg-gray-400">Graficar moneda aleatoria</button>
  </div>
</div>

</template>

<script>
import Chart from "chart.js";

export default {
  name: "CoinChart",
  data () {
    return {
      coins: [],
    };
  },
  methods: {
    getRandom () {
      return Math.floor(Math.random() * this.coins.length);
    },
    getAllCoins () {
      const peticion = fetch("https://api.coinranking.com/v2/coins")
        .then((response) => response.json())
        .then((data) => {
          this.coins = [...data.data.coins];
        })
        .catch((error) => console.error(error));
      return peticion;
    },
    plotCoin () {
      this.getAllCoins();
      const canvas = document.querySelector("#ejemplo");
      const myLineChart = new Chart(canvas, {
        type: "line",
        data: {
          labels: [],
          datasets: {
            data: [1, 5, 6], /* ...this.coins[0].sparkline*/
            label: "nose",
            backgroundColor: "#3e95cd",
            borderColor: "#3e95cd",
            fill: false,
          },
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: `${this.coins[0].name}(${this.coins[0].symbol})`,
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Hora",
              },
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Precio",
              },
            }],
          },
        },
      });
    },
  },
  mounted () {
    this.plotCoin();
  },
};
</script>
