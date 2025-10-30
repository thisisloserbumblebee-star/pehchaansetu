// firebase-config.js — compat style (loaded after firebase-app-compat.js)
(function () {
  // REPLACE these values with your Firebase project's actual config (from Firebase Console)
  const firebaseConfig = {
    

     apiKey: "AIzaSyD1dfkopi9k_y6s44rsCQKRfXCX6UsCY5s",
  authDomain: "pehchaan-setu.firebaseapp.com",
  projectId: "pehchaan-setu",
  storageBucket: "pehchaan-setu.firebasestorage.app",
  messagingSenderId: "868115882621",
  appId: "1:868115882621:web:4617ee0266fb1d22818714",
  measurementId: "G-53QDYFKN7R"
  };

  // initialize
  if (!window.firebase || !firebase.initializeApp) {
    console.error('firebase compat not available');
    return;
  }

  try {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized OK for project:', firebaseConfig.projectId);
    // make firebase global (already on window.firebase)
    window.__firebase = firebase;
  } catch (e) {
    console.error('Firebase init error', e);
  }
})();
