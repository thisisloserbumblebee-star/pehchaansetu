<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDfldfkopj9k_y6s44rsCQRKfXCV6uSCyS",
    authDomain: "pehchaan-setu.firebaseapp.com",
    projectId: "pehchaan-setu",
    storageBucket: "pehchaan-setu.appspot.com",
    messagingSenderId: "868115882621",
    appId: "1:868115882621:web:461eee8266f1bd22818714",
    measurementId: "G-53DQYFKN7R"
  };

  const app = initializeApp(firebaseConfig);
  window.__firebase = {
    auth: getAuth(app),
    db: getFirestore(app),
    storage: getStorage(app)
  };
</script>
