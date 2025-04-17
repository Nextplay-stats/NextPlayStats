// Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDGoM7HMarLx98siTkaxXMctoRYhhRyHWc",
    authDomain: "nextplaystats-fcd84.firebaseapp.com",
    projectId: "nextplaystats-fcd84",
    storageBucket: "nextplaystats-fcd84.firebasestorage.app",
    messagingSenderId: "1030144413105",
    appId: "1:1030144413105:web:1a2c7446888059a4820190",
    measurementId: "G-8YP1JPS3D3"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
