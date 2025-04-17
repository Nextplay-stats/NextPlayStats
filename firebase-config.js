<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDGoM7HMarLx98siTkaxXMctoRYhhRyHWc",
    authDomain: "nextplaystats-fcd84.firebaseapp.com",
    projectId: "nextplaystats-fcd84",
    storageBucket: "nextplaystats-fcd84.firebasestorage.app",
    messagingSenderId: "1030144413105",
    appId: "1:1030144413105:web:1a2c7446888059a4820190",
    measurementId: "G-8YP1JPS3D3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
