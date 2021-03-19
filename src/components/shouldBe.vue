      // Seteo en la variable todas las monedas
      this.getAllCoins();
      const canvas = document.querySelector("#ejemplo");
      const myChart = {};
      myChart.type = "line";
      myChart.data.labels = ["-"];
      myChart.data.datasets.data = [
        this.coins[0].sparkline[0],
        this.coins[0].sparkline[1],
        this.coins[0].sparkline[2],
        this.coins[0].sparkline[3],
        this.coins[0].sparkline[4],
        this.coins[0].sparkline[5],
        this.coins[0].sparkline[6],
        this.coins[0].sparkline[7]];
      myChart.data.datasets.backgroundColor = "#3e95cd";
      myChart.options.responsive = true;
      myChart.options.title = { display: true, text: `${this.coins[0].name} (${this.coins[0].symbol})` };
      myChart.options.scales = {
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
      };
      return new Chart(canvas, myChart);
