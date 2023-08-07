import { Chart } from "https://cdn.jsdelivr.net/npm/chart.js";

export function configurarGrafica_ArduinoMega() {
  var ctx = document.getElementById("lineChart").getContext("2d");
  return new Chart(ctx, {
    type: "bar", // opc. line, pie, bar
    data: {
      labels: [],
      datasets: [
        {
          label: "Humedad (%)",
          data: [],
          borderColor: "rgba(192, 75, 192, 1)",
          backgroundColor: "rgba(192, 75, 192, 0.2)",
          fill: true,
        },
        {
          label: "Distancia (cm)",
          data: [],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
