import { configurarGrafica_ArduinoMega } from "./chart-utils.js";
import { onValue } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { humedadRef, distanciaRef } from "./firebase-config.js";

// Inicializar la gráfica
var lineChart = configurarGrafica_ArduinoMega();

// Escuchar cambios en los datos y actualizar la página y la gráfica
onValue(humedadRef, function (snapshot) {
  const humedad = snapshot.val();
  console.log("Humedad:", humedad);
  document.getElementById("humedad").textContent = "Humedad: " + humedad + "%";

  // Agregar el nuevo valor a los datos de la gráfica de humedad
  lineChart.data.labels.push(new Date().toLocaleTimeString());
  lineChart.data.datasets[0].data.push(humedad);

  // Limitar el número de puntos mostrados en la gráfica a 10
  if (lineChart.data.labels.length > 10) {
    lineChart.data.labels.shift();
    lineChart.data.datasets[0].data.shift();
  }

  // Volver a renderizar la gráfica actualizada
  lineChart.update();
});

onValue(distanciaRef, function (snapshot) {
  const distancia = snapshot.val();
  console.log("Distancia:", distancia);

  // Agregar el nuevo valor a los datos de la gráfica de distancia
  lineChart.data.labels.push(new Date().toLocaleTimeString());
  lineChart.data.datasets[1].data.push(distancia);

  // Volver a renderizar la gráfica actualizada
  lineChart.update();
});
