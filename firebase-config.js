// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfhdfkopi9k_y6s44rsCQRfKfXCGUsCYs",
  authDomain: "pehchaan-setu.firebaseapp.com",
  projectId: "pehchaan-setu",
  storageBucket: "pehchaan-setu.appspot.com",
  messagingSenderId: "868115882621",
  appId: "1:868115882621:web:4617eee0266fb1d22818714",
  measurementId: "G-SC0GNZHMY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Make available globally
window.__firebase = { app, auth, db, storage };
