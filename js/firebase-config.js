// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZtZAYzV9Sojy0h6fBv5mcfNOMXF0lkW8",
    authDomain: "real-6152a.firebaseapp.com",
    databaseURL: "https://real-6152a-default-rtdb.firebaseio.com",
    projectId: "real-6152a",
    storageBucket: "real-6152a.appspot.com",
    messagingSenderId: "1047171068340",
    appId: "1:1047171068340:web:291438cbf6c6a9a181c2e1",
    measurementId: "G-ZL2X1BHLMG",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

// Referencias a las rutas de la base de datos
export const humedadRef = ref(database, "/dht11/humedad");
export const distanciaRef = ref(database, "/HC-SR04/distancia");
