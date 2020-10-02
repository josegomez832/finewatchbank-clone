import firebase from './firebase'

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCORR_b0RNAIrJvEr7ew2XXcfujjguf-Gw",
    authDomain: "finewatchbank.firebaseapp.com",
    databaseURL: "https://finewatchbank.firebaseio.com",
    projectId: "finewatchbank",
    storageBucket: "finewatchbank.appspot.com",
    messagingSenderId: "946636636188",
    appId: "1:946636636188:web:5ce58fe63cc4aee3e9dfd9",
    measurementId: "G-EEJY059Q47"
  });

  const db = firebaseApp.firestore();
  //see https://youtu.be/B6ay3jAZN5o?t=6628
  //const auth = firebase.auth();

 export { db }; 