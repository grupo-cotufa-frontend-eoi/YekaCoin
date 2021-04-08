<template>
  <div class="container">
    <div class="selectors">
      <div class="selector">
        <select
          data-testid="first-select"
          @change="setData"
          class="first-coin"
          v-model="first"
        >
          <option v-for="coin of this.coins" :key="coin.uuid" :value="coin">
            {{ coin.name }}
          </option>
        </select>
      </div>
      <svg
        class="arrows"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
      <div class="selector">
        <select
          data-testid="second-select"
          @change="setData"
          class="second-coin"
          v-model="second"
        >
          <option v-for="coin of this.coins" :key="coin.uuid" :value="coin">
            {{ coin.name }}
          </option>
        </select>
      </div>
    </div>
    <canvas data-testid="canvas" id="chart"
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
      maxLimit: 0,
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
      this.calculateMaxLimit(this.sparklines[0], this.sparklines[1]);
      this.buildChart();
    },
    calculateMaxLimit(firstPrices, secondPrices) {
      const firstMax = Math.max(...firstPrices);
      const secondMax = Math.max(...secondPrices);
      this.maxLimit = firstMax > secondMax ? firstMax : secondMax;
    },
    buildChart() {
      const canvas = document.getElementById("chart");
      Chart.defaults.global.defaultFontColor = "black";
      Chart.defaults.global.defaultFontSize = 18;
      if (window.myCharts !== undefined) {
        window.myCharts.destroy();
      }
      window.myCharts = new Chart(canvas, {
        type: "line",
        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.sparklines[0],
              label:
                this.first.name +
                ": " +
                parseFloat(this.first.price).toFixed(2),
              backgroundColor: "#DA7500",
              borderColor: "#3e95cd",
              fill: false,
              pointRadius: 7,
              pointHoverRadius: 10,
              borderWidth: 3,
            },
            {
              data: this.sparklines[1],
              label:
                this.second.name +
                ": " +
                parseFloat(this.second.price).toFixed(2),
              backgroundColor: "#94CBFF",
              borderColor: "#8e5ea2",
              fill: false,
              pointRadius: 7,
              pointHoverRadius: 10,
              borderWidth: 3,
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
                  max: this.maxLimit,
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
    },
  },
  computed: {
    ...mapState(["coins"]),
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
  @apply bg-turquoise border-2 border-marine shadow-lg rounded-xl;
}
.container {
  & .selectors {
    @apply flex justify-center items-end my-5;

    & .selector {
      @apply flex flex-col;

      & select {
        @apply mx-5 bg-marine h-8;
      }
    }

    & .arrows {
      @apply h-8 w-8;
    }
  }

  & #chart {
    @apply w-full h-1/2;
  }
}
</style>
