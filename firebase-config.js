// firebase-config.js
// This file must be loaded AFTER the compatibility Firebase SDK scripts.
// It uses the compat API and exposes a small global window.__firebase object.

(function () {
  // Replace with your Firebase config if different.
  var firebaseConfig = {
    apiKey: "AIzaSyD1dfkopi9k_y6s44rsCQKRfXCK6UsCY5s",
    authDomain: "pehchaan-setu.firebaseapp.com",
    projectId: "pehchaan-setu",
    storageBucket: "pehchaan-setu.appspot.com",
    messagingSenderId: "868115882621",
    appId: "1:868115882621:web:4617ee0266fb1d22818714",
    measurementId: "G-SC0GNZHMY5"
  };

  if (!window.firebase) {
    console.error('Firebase global not found. Make sure firebase-app-compat.js is loaded.');
    return;
  }

  try {
    window.firebase.initializeApp(firebaseConfig);
    var auth = window.firebase.auth();
    var db = window.firebase.firestore();
    var storage = window.firebase.storage();

    // Expose for other pages/scripts
    window.__firebase = { app: window.firebase.app(), auth: auth, db: db, storage: storage };
    console.log('Firebase initialized OK');
  } catch (e) {
    console.error('Firebase init error', e);
  }
})();
