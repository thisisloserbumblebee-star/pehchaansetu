// firebase-config.js (compat style)
// This file should be loaded AFTER the compat CDN scripts in the HTML.

const firebaseConfig = {
  apiKey: "AIzaSyDfhdfkopi9k_y6s44rsCQRfKfXCGUsCYs",
  authDomain: "pehchaan-setu.firebaseapp.com",
  projectId: "pehchaan-setu",
  storageBucket: "pehchaan-setu.appspot.com",
  messagingSenderId: "868115882621",
  appId: "1:868115882621:web:4617eee0266fb1d22818714",
  measurementId: "G-SC0GNZHMY5"
};

// Initialize Firebase using compat API
if (!window.firebase || !firebase.apps) {
  firebase.initializeApp(firebaseConfig);
}

// Expose small helper for other scripts
window.__firebase_compat = {
  app: firebase.app(),
  auth: firebase.auth(),
  firestore: firebase.firestore(),
  storage: firebase.storage()
};
